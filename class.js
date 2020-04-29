function product(arr){
    let product = 1
    if(arr.length === 0) return 1
    for(let i = 0 ; i < arr.length; i++){
        product *= a[i]
    }
    return product
}

function productOfArray(arr) {
    if(arr.length === 0) {
        return 1;
    }
    return arr[0] * productOfArray(arr.slice(1));
}