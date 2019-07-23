/* alert("una prueba de componentes") */

document.getElementById("btn_texto").addEventListener("click", fn_Texto)  
document.getElementById("btn_password").addEventListener("click", fn_Password)
document.getElementById("btn_areaTexto").addEventListener("click", fn_Area)

   document.getElementById("btn_lista").addEventListener("click", fn_Lista)
document.getElementById("btn_checkbox").addEventListener("click", fn_CheckBox)
document.getElementById("btn_radioButton").addEventListener("click", fn_RadioButton)
document.getElementById("btn_rango").addEventListener("click", fn_Rango)
document.getElementById("btn_imagen").addEventListener("click", fn_Imagen)


function fn_Texto() {
   //alert("Cuadro de texto")
   /* var renglon = document.createElement("br");
   var nodo = document.createTextNode("espacio");
   renglon.appendChild(nodo);
   var obj= document.getElementById("div_cuadroPassword");
   objeto.appendChild(renglon); */
   const objeto = document.createElement('input');
   objeto.type="text";
   objeto.name="nuevo cuadro de texto";
   objeto.value="este es el nuevo cuadro de texto";
   /* document.body.appendChild(objeto) */
   document.getElementById("div_cuadroTexto").appendChild(objeto);

}

function fn_Password (){
   //alert("Password")
   const objeto = document.createElement('input');
   objeto.type="password";
   objeto.name="nuevo cuadro de password";
   objeto.value="este es el nuevo cuadro de password";
   document.getElementById("div_cuadroPassword").appendChild(objeto);
}

function fn_Area (){ 
   alert("Area de texto") 
   const objeto = document.createElement('textarea');
   objeto.rows="3";
   objeto.cols="30";
   objeto.name="nueva area de texto";
   objeto.value="el nuevo texto va aqui";
   document.getElementById("div_cuadroAreaTexto").appendChild(objeto);
}
function fn_Lista (){ alert("Lista") }
function fn_CheckBox (){ alert("Checkbox") }
function fn_RadioButton (){ alert("RadioButton") }
function fn_Rango (){ alert("Rango") }
function fn_Imagen () { alert("Imagen") }

/* window.addEventListener("load", event => {
   alert('Test')
   const f = d.getElementById(first);
 
   f.addEventListener("click", handleClick)
 }); */