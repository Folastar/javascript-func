
// reverse a string 
const reverseString =(str)=>{
    return str.split('').reverse().join('')
}
console.log(reverseString('hello'))

//count characters

const countCharacter =(num)=>{
    return num.length
}


console.log(countCharacter('one'))

//capitalize the first lettter of string
const capitalize =(caps)=>{
    return caps.charAt(0).toUpperCase() + caps.slice(1)
}


console.log(capitalize('dfdf'))


//arrays////////


// min max array

const numbers =[2,3,5,6,8,9,9,7,5,4,3,2,5,76]



const minMax =()=>{
   const minimum =Math.min(...numbers)
   const max =Math.max(...numbers)
   return { minimum, max}
}


console.log(minMax())

//filter  numbers greatger than five
const filNum = numbers.filter(num =>  num>5)
console.log(filNum)






///mathematical factorials 

//function to calculate factorial of a given number

function factorial(n) {
    if (n === 0 || n === 1) return 1;
    return n * factorial(n - 1);
}

// Example usage
console.log(factorial(5));  // Output: 120


//write a function about prime numbers


function isPrime(num) {
    if (num < 2) return false; // Numbers less than 2 are not prime
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false; // Found a divisor, so not prime
    }
    return true; // No divisors found, so it's prime
}




//fibonancci 

function fibonacci(n) {
    let a = 0, b = 1, temp;
    for (let i = 2; i <= n; i++) {
        temp = a + b;
        a = b;
        b = temp;
    }
    return n === 0 ? a : b;
}

// Example usage
console.log(fibonacci(6));  // Output: 8

