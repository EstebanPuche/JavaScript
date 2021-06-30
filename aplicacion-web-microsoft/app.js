'use strict'
// Obtenemos la referencia del botón y lo guardamos en una variable.
const switcher = document.querySelector('.btn');
// Agregamos la escucha de eventos y el controlador de eventos para 'click'
//El método 'toggle' cambia el elmento de la clase 'dark-theme'
switcher.addEventListener('click', function(){
    document.body.classList.toggle('dark-theme')

    var className = document.body.className;
    if(className == "light-theme"){
        this.textContent = "Dark";
    }
    else{
        this.textContent = "Light";
    }
    console.log("El actual nombre de la clase: " + className);
});