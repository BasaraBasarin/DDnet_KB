window.onload = function() {
};

var audio1 = new Audio('sfx_copy.mp3');
var audio2 = new Audio('sfx_emoji.mp3');

function Copy(texto) {

  var eTemp = document.createElement('textarea');
  eTemp.value = texto;

  document.body.appendChild(eTemp);

  eTemp.select();
  document.execCommand('copy');
  document.body.removeChild(eTemp);
 
  var campoEntrada = document.getElementById('myInput');
  campoEntrada.value += '' + texto;
  audio2.play();
}


function myFunction() {
  var label = document.getElementById('cb');
  label.style.color = 'white';
  
  var copyText = document.getElementById("myInput");

  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices

  navigator.clipboard.writeText(copyText.value);

  audio1.play();
  setTimeout(function() {
    label.style.color = "#303030";
  }, 2000);
  
}
