function CambioFondo(elemento) {
  document.getElementsByClassName('container-titulo')[0].style.background="#4d62d0";
  if (document.getElementsByClassName('container-titulo').children[0]){
  	document.getElementsByClassName('container-titulo').children[0].style.background="inherit";
  }
}
function CambioFondo2(elemento) {
  document.getElementsByClassName('top-row')[0].style.background="#149c5f";
  console.log(document.getElementsByClassName('container-titulo').children)
  if (document.getElementsByClassName('container-titulo').children[0]){
  	document.getElementsByClassName('container-titulo').children[0].style.background="inherit";
  }
}

function CambioPaneles(elemento) {
	console.log(document.querySelectorAll('[class*=item]'))
  	document.querySelectorAll('[class*=item]')[1].style.width="4%";
}
// la funcion CambioFondo(document.getElementsByClassName('container-titulo'))
//function CambioFondo(elemento) {
//  document.getElementsByClassName('top-row')[0].style.background="#149c5f";
//}



//document.querySelectorAll('.item')[0].style.width="88%";

//document.getElementsByClassName('item-2')[0].style.width="88%";
//document.getElementsByClassName('item-3')[0].style.width="88%";

//document.querySelectorAll('.item')[0].style.background="#4d62d0";
//document.getElementsByClassName('item-2')[0].style.background="#4d62d0";
//document.getElementsByClassName('item-3')[0].style.background="#4d62d0";

//if (document.getElementsByClassName('container-titulo').children){
//document.getElementsByClassName('container-titulo').children[0].style.background="inherit"
//}
