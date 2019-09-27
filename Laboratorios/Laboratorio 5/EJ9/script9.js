function calcularArea(){
    var radio = prompt("Ingresa el radio del circulo:");

    if(radio <= 0){
        return -1;
    }
    else{
        var area = Math.PI * Math.pow(radio,2);
    }

    console.log(area);
}

calcularArea();