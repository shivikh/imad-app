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

var button=document.getElementById('counter');
button.onclick=function()
{
    var request=new XMLHttpRequest();
    request.onreadystatechange=function()
    {
        if(request.readystate===XMLHttpRequest.DONE)
        {
            if(request.status===200)
            {
                var counter=request.responseText;
                var span=document.getElementById('count');
                span.innerHTML=counter.toString();
            }
        }
    };
    request.open('GET','http://coco98.imad.hasura.io/counter',true);
    request.send(null);
};