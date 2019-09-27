function fibo(n){

    var a = 0;
    var b = 1; 
    var actual;

    for(let i = 0; i < n; i++){
        actual = a + b;
        a = b;
        b = actual;

        console.log(actual + "");
    }
}

console.log(fibo(10));