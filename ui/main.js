/*console.log('Loaded!');

//change the text of main-text div
var element=document.getElementById('main-text');
element.innerHTML='new value';

//move the image
var img=document.getElementById('nodi');
var marginLeft=0;
function moveRight()
{
    marginLeft=marginLeft+1;
    img.style.marginLeft=marginLeft+'px';
}
img.onclick=function(){
    var interval=setInterval(moveRight,50);
 };
*/

//counter end point


/*var button=document.getElementById('counter');
var counter=0;
button.onclick=function()
{
    counter=counter+1;
    var span=document.getElementById('count');
    span.innerHTML=counter.toString();
};*/

//counter 

var button = document.getElementById('counter');
button.onclick = function()
{
    var request = new XMLHttpRequest();
    request.onreadystatechange = function()
    {
        if(request.readyState === XMLHttpRequest.DONE)
        {
            if(request.status === 200)
            {
               
                   }
        }
    };
    request.open('GET','http://skhandelwal58821.imad.hasura-app.io/counter',true);
    request.send(null);
};

var submit = document.getElementById('submit_btn');
submit.onclick = function()
{
    //capture a list of names and render it
    
    var request = new XMLHttpRequest();
    request.onreadystatechange = function()
    {
        if(request.readyState === XMLHttpRequest.DONE)
        {
            if(request.status === 200)
            {
                var names = request.responseText;
                names = JSON.parse(names);
                 
    var list = '';
    for(var i=0;i<names.length;i++)
    {
        list += '<li>' + names[i] + '</li>';
    }
    var ul = document.getElementById('namelist');
    ul.innerHTML = list;

                                  
            }
        }
    };
    var nameInput = document.getElementById('name');
var name = nameInput.value;

    request.open('GET','http://skhandelwal58821.imad.hasura-app.io/submit_name?name=' + name,true);
    request.send(null);
   
};