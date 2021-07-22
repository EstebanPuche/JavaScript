console.log('Hola se me puede leer');
function changeText(){
    document.getElementById('demo1').innerHTML = "Hello JavaScript!"
}
//******************************************************************************/
function luzOn(){
    document.getElementById('myImage').src = "../imagenes/pic_bulbon.gif";
    // Cuando puedas revis por que esto tan sencillo no te sale...
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