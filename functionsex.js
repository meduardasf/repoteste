function isEven(n){
    if (n %2 === 0){
        return true;
    }
    else {
        return false;
    }
}

or

function isEven(n){
    return n %2 === 0;
}



function factorial(n){
    var result = 1;
    for(var i = 2; i <= n; i++){
        result *= i;
    }
    return result;
}

function kebabToSnake(str){
    var myString = str.replace(/-/g, "_");
    return myString;
}