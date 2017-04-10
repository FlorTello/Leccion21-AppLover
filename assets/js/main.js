window.addEventListener('load',function(){

});

function crearImgWork(url,descripcion){
  var figure = document.createElement('figure');
  figure.setAttribute('class','box-work');
  var img = document.createElement('img');
  img.setAttribute('src',url);
  img.setAttribute('class','img-work');
  img.setAttribute('alt',"name");
  var figcaption = document.createElement('figcaption');
  figcaption.innerHTML = descripcion;
}
