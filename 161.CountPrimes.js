// Count the number of prime numbers less than a non-negative number, n.

/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    let count = 0;
    
    for(let i=2; n>i; i++) {
        if(checkPrime(i))
            count++;
    }
    return count;
};

var checkPrime = function(n){
    let divisor = 2;
    let limit = Math.sqrt(n);

    while (limit >= divisor){
        if(n % divisor == 0){
            return false; 
        }
        else
          divisor++;
    }
    return true;
}