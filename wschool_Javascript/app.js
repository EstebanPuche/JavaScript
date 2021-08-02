console.log('Hola se me puede leer');
function changeText(){
    document.getElementById('demo1').innerHTML = "Hello JavaScript!"
}
//******************************************************************************/
function luzOn(){
    document.getElementById('myImage').src = "../imagenes/pic_bulbon.gif";
    // Cuando puedas revisa por que esto tan sencillo no te sale...
    /*var encender = false;
    if (encender){
        document.getElementById('myImage').src = "../imagenes/pic_bulbon.gif";
    }else{
        document.getElementById('myImage').src = "../imagenes/pic_bulboff.gif"
    }*/
}
function luzOff(){
    document.getElementById('myImage').src = "../imagenes/pic_bulboff.gif";
}
/********************************************************************************/
function sizeText(){
    document.getElementById('demo2').style.fontSize = "40px";
    document.getElementById('demo2').style.fontFamily = "cursive";
    document.getElementById('demo2').style.color = "blue";
}
/********************************************************************************/
function hideText(){
    document.getElementById('demo3').style.display = "none";
}
/*********************************************************************************/
function methodSlice(){
    let string = "Apple, Banana, Kiwi";
    document.getElementById('demo4').innerHTML = string.slice(7, 13);// string.slice(-12, -6);
}

function methodSubstring(){
    let string = "Apple, Banana, Kiwi";
    document.getElementById('demo5').innerHTML = string.substring(5, 15);
}

function methodSubstr(){
    let string = "Apple, Banana, Kiwi";
    document.getElementById('demo6').innerHTML = string.substr(7, 12);
}

function methodReplace(){
    let texto = document.getElementById('demo7').innerHTML;
    document.getElementById('demo7').innerHTML = texto.replace("Juan", "Esteban");
}