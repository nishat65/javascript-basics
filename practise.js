const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function split(array) {
  let sortedArray = [];
    const right =  array.slice(Math.ceil(array.length/2), array.length);
    const left = array.slice(0 , Math.ceil(array.length/2));
     
      
    
}

split(numbers)

function checkArmstrongNumber(n){
    let sum = 0
    let number = n
    while(number){
    let num = number%10
    sum = sum + num**3 
    number = parseInt(number/10)
}
    return sum === n && true
}

/* Another Method when while=true;
function checkArmstrongNumber(n){
    let sum = 0
    let number = n
    while(true){
    let num = number%10
    sum = sum + num**3 
    number = parseInt(number/10)
    if(number === 0) break;
}
    return sum === n && true
}

function checkArmstrongNumber(n){
    let sum = 0
    let number = n
    let a = true
    while(a){
    let num = number%10
    sum = sum + num**3 
    number = parseInt(number/10)
    if(number === 0) a= false;
}
    return sum === n && true
}

function checkArmstrongNumber(n, pow){
    let sum = 0
    let number = n
    let a = true
    while(a){
    let num = number%10
    sum = sum + num**pow
    number = parseInt(number/10)
    if(number === 0) a= false;
}
    return sum === n && true
}
*/

function reverse(x) {
    let y = 0, res = 0;
    while (x) {
        res = x%10;
        x = parseInt(x/10);
        y = y * 10 + res;
        console.log(y)
    }
 return y < Math.pow(-2, 31) || Math.pow(2, 31) < y ? 0 : y;
};

function singleNumberFromDuplicates(arr){
    let set = arr.reduce((obj, cur) => {
        obj[cur] = obj[cur]+1|| 0
        return obj 
     }
    ,{})
	let a = []
    for(let i in set) if(set[i] == 0) a.push(i)
    return a
}


//maximum sub array
function getMaxSubSum(arr) {
  let maxSum = 0; // if we take no elements, zero will be returned

  for (let i = 0; i < arr.length; i++) {
    let sumFixedStart = 0;
    for (let j = i; j < arr.length; j++) {
      sumFixedStart += arr[j];
      maxSum = Math.max(maxSum, sumFixedStart);
    }
  }

  return maxSum;
}

// getMaxSubSum([-1, 2, 3, -9])

//maximum sub array using another approach 
function getMaxSubSum(arr) {
  let maxSum = 0;
  let partialSum = 0;

  for (let item of arr) { // for each item of arr
    partialSum += item; // add it to partialSum
    maxSum = Math.max(maxSum, partialSum); // remember the maximum
    if (partialSum < 0) partialSum = 0; // zero if negative
  }

  return maxSum;
}

//using kedane algorithm

var maxSequence = function(arr){

  var curr_max = 0, max_so_far = 0;

  for(var i = 0; i < arr.length; i++){  
    curr_max = Math.max(0, curr_max + arr[i]);
    max_so_far = Math.max(curr_max, max_so_far);
  }
  return max_so_far;
}

console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // returns 6 : [4, -1, 2, 1]

let allPositives = arr => arr.every(n => n > 0)
let allNegatives = arr => arr.every(n => n < 0)
let sum = arr => arr.reduce((curr_max, max_so_far) => curr_max + max_so_far, 0)

var maxSequence = function(arr){
  if(arr.length === 0 || allNegatives(arr)) return 0;
  if(allPositives(arr)) return sum(arr);

  var curr_max = 0, max_so_far = 0;

  for(var i = 0; i < arr.length; i++){  
    curr_max = Math.max(0, curr_max + arr[i]);
    max_so_far = Math.max(curr_max, max_so_far);
  }
  return max_so_far;
}

function maximumSubArray(a){
    let max = Number.NEGATIVE_INFINITY, sum = 0
    for(let item of a){
        sum += item
        max = Math.max(max, sum)
        sum = Math.max(sum, 0) 
    }
    return max 
}

//moving zeroes at the end
function movingZeroes(ar){
    let count = 0
    for(let i = 0 ; i < ar.length; i++){
        if(ar[i] === 0){
            ar.splice(i,1)
            ar.push(0)
        } 
    }
return ar 
}

function order(array){
  count = 0;
  for(var i=0;i<array.length;i++){
    if(array[i] !== 0){
      //non zero element count
      array[count] = array[i]
      count++;
    }
  }
  while(count<array.length){
    array[count] = 0
    count++
  }
  return array
}

function countElements(a){
    let b = a.reduce((obj, item) => {
        obj[item] = obj[item]+1 || 0
        return obj
    },{})
    let count = 0
    for(let i=0; i < Object.keys(b).length; i++ ){
        if(Object.keys(b)[i] - Object.keys(b)[i+1] === -1) count++
    }
return count 
}
