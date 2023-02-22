function validar (formulario){
    var nombre = formulario.nombre.value;
    
    if(nombre.length <= 3){
        alert("Favor de ingresar más de tres caracteres en el campo nombre");
        formulario.nombre.focus();
        return false;
    }
}