let prime = [];
let mark = [];
let numPrime = 0;

function sieve(n) {
    const limit = Math.sqrt(((n * 1.) + 2));
    
    // 1 is not prime. we marlk 0 is not prime.
    mark[1] = 0;

    // almost all the evens are not prime
    for (let i = 4; i <= n; i += 2)
        mark[i] = 0;
    
    // 2 is prime
    prime[numPrime++] = 2;

    // run loop for only odd numbers
    for (let i = 3; i <= n; i += 2)
        // if not prime, no need to do multiple cutting 
        if (!mark[i]) {
            // i is prime
            prime[numPrime++] = i;

            if (i <= limit) {
                // loop through all odd multiples of i, which is greater than i*i
                for (let j = i * i; j <= n; j += i * 2){
                    // mark j not prime
                    mark[j] = 0;
                }
            }
        }
    return prime;
}

const result = sieve(24);
console.log(result);