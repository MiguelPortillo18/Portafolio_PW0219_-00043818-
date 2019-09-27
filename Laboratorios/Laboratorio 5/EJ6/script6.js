function ordenarArray(array = [9,2,6,3,4,8,1,7]){
    let a, b;

    for(let j = 0; j < array.length - 1; j++){
        for(let i = 0; i < array.length - 1; i++){
            if(array[i] > array[i +1]){
                a = array[i];
                b =array[i + 1];

                array[i] = b;
                array[i + 1] = a;           
            }
        }
    }

    return console.log(array);
}

ordenarArray();