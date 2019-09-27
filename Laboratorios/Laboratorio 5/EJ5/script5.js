function palindrome(palabra){
    var reverse = "";

    for(let i = palabra.length - 1; i >= 0; i--){
        reverse += palabra[i];
    }

    if(palabra == reverse){
        alert("La palabra es palindrome");
    }
    else{
        alert("La palabra no es palindrome");
    }
}

console.log(palindrome("hola"));
console.log(palindrome("oso"));