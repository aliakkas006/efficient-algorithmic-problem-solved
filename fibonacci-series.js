let a = 0;
let b = 1;

console.log(a);
console.log(b );

for (let i = 2; i <= 6; i++){
    let c = a + b;
    a = b;
    b = c;

    console.log(c);
}


// using recursion:
 /* 
 function fibonacci(n) {
    if (n === 0) return 0;
    if (n === 1) return 1;

     return fibonacci(n - 1) + fibonacci(n - 2);
}

const result = fibonacci(6);
console.log(result);
 */
 

