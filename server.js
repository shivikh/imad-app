var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool = require('pg').Pool;
var crypto = require('crypto');

var config = {
    user:'skhandelwal58821',
    database:'skhandelwal58821',
    host:'db.imad.hasura-app.io',
    port:'5432',
    password: process.env.DB_PASSWORD
};

var app = express();
app.use(morgan('combined'));
var articles={
'article-one':{
    title :'Article-one|shivani',
    heading:'Article one',
    date:'25 march 2018',
    content:`
        <p>this is my first web app.this is my first web app.this is my first web app.this is my first web app.this is my first web app.this is my first web app.</p>
        <p>this is my first web app.this is my first web app.this is my first web app.this is my first web app.this is my first web app.this is my first web app.</p>
        <p>this is my first web app.this is my first web app.this is my first web app.this is my first web app.this is my first web app.this is my first web app.</p>`
            
},
'article-two':{
    title :'Article-two|shivani',
    heading:'Article two',
    date:'26 march 2018',
    content:`
     <p>this is my second web app.this is my second web app.this is my second web app.this is my second web app.this is my second web app.</p>
        `
            
},
'article-three':{
    title :'Article-three|shivani',
    heading:'Article three',
    date:'27 march 2018',
    content:`
     <p>this is my three web app.this is my three web app.this is my three web app.this is my three web app.this is my three web app.this is my three web app.</p>
        `
            
}
};
function createTemplate(data){
    var title=data.title;
    var date=data.date;
    var heading=data.heading;
    var content=data.content;
    
var htmlTemplate=`
<html>
    <head>
        <title>${title}</title>
        <meta name="viewport" content="device-width-device,initial-scale=1"/>
    <link href="/ui/style.css" rel="stylesheet" />
     </head>
    <body>
        <div class="container">
        <div>
            <a href="/">HOME</a>
        </div>
        <hr/>
        <div>
            <h3>${heading}</h3>
        </div>
        <div>
            ${date}
        </div>
        
        <div>
            ${content}
        </div>
        </div>
    </body>
</html>
`;
return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

function hash(input, salt)
{
    var hashed = crypto.pbkdf25ync(input, salt, 10000, 512, 'sha512');
    return hashed.toString('hex');
}

app.get('/hash/:input',function(req,res)
{
   var hashedString = hash(req.params.input, 'this-is-some-string');
   res.send(hashedStrinng);
});

var pool = new Pool(config);
app.get('/text-db',function(req,res)
{
   //make a select request
   //return a response with the result
   pool.query('SELECT * FROM test',function(err,result)
   {
       if(err)
       {
           res.status(500).send(err.toString());
       }
       else
       {
           res.send(JSON,stringify(result));
       }
   });
});

var counter=0;
app.get('/counter',function(req,res)
{
   counter=counter+1;
   res.send(counter.toString());
});

var names =[];
app.get('/submit_name',function(req,res)
{
    var name = req.query.name;
    names.push(name);
    res.send(JSON.stringify(names));
});


app.get('/:articleName', function (req, res) {
    var articleName=req.params.articleName;
    res.send(createTemplate(articles[articleName]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
