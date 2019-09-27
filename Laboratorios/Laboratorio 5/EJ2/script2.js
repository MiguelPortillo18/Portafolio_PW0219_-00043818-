var arr = [1,3,5,7,9,11];

function sumArray(arr){

    let sum = 0;

    arr.forEach(element => {
      sum += element;
    });

    console.log(sum);
    console.log(sum/arr.length);
}

sumArray(arr);