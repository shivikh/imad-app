console.log('Loaded!');

//change the text of main-text div
var element=document.getElementById('main-text');
element.innerHTML='new value';

//move the image
var img=document.getElementById('nodi');
img.onclick=function(){
    img.style.marginLeft='100px';
};

var img=document.getElementById('nodi');
img.onclick=function(){
    img.style.marginRight='200px';
};