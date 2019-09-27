var arreglo = [];

function llenarArray(){

    for(let i = 0; i < 21; i++){
        arreglo.push(Math.floor(Math.random()*10));
    }

    console.log(arreglo);
}

llenarArray();

var consulta = prompt("Digite el numero: ");

if(arreglo.includes(Number(consulta))){
    alert("Has ganado tio");
}
else{
    alert("Has perdido tio");
}


