function encriptar() {
 var texto=document.getElementById("inputtexto").value.toLowerCase();

 var txtcifrado=texto.replace(/e/igm,"enter");
 var txtcifrado=txtcifrado.replace(/o/igm,"ober");
 var txtcifrado=txtcifrado.replace(/i/igm,"imes");
 var txtcifrado=txtcifrado.replace(/a/igm,"ai");
 var txtcifrado=txtcifrado.replace(/u/igm,"ufat");

 document.getElementById("derecha").style.display="none";
 document.getElementById("textoimg").style.display="none";
 document.getElementById("inputtexto");
 document.getElementById("texto2").innerHTML=txtcifrado;

 document.getElementById("copiar").style.display="show";
 document.getElementById("copiar").style.display="inherit";
}   

function desencriptar() {
    var texto=document.getElementById("inputtexto").value.toLowerCase();

    var txtcifrado=texto.replace(/enter/igm,"e");
    var txtcifrado=txtcifrado.replace(/ober/igm,"o");
    var txtcifrado=txtcifrado.replace(/imes/igm,"i");
    var txtcifrado=txtcifrado.replace(/ai/igm,"a");
    var txtcifrado=txtcifrado.replace(/ufat/igm,"u");
   
    document.getElementById("derecha").style.display="none";
    document.getElementById("inputtexto");
    document.getElementById("texto2").innerHTML=txtcifrado;
   
    document.getElementById("copiar").style.display="show";
    document.getElementById("copiar").style.display="inherit";
    limpiarCajaTexto();
    
   }
   function copiar(){
    var contenido=document.querySelector("#texto2");
    contenido.select();
    document.execCommand("copy");
    alert("se copio");
    limpiarCajaTexto();
    
   }
   function limpiarCajaTexto() {
    document.getElementById("inputtexto").value = '';
    document.getElementById("inputtexto").focus();
  }
  






  
    
  
  

  