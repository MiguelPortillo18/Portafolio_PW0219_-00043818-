var array = [1,5,4,5,6,9,5,7,5,2,5];

function ocurrencias(arr, num){
    let counts = 0;

    array.forEach(element => {
        if(element == num) counts++;
    });

    console.log(counts);
}

ocurrencias(array, 5);