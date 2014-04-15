/* This will solve the problem with numbers smaller than 1000 */
var target = 600851475143;
var primeFactor = 0;

for(i = 1; i < 1000; i++) {
    if (target % i === 0) {
        primeFactor = i;
    }
}

console.log(primeFactor);

/* Modified to solve up to the target number, but the IDE kept running out of memory */
var target = 600851475143;
var primeFactor = 0;

for(i = 1; i < target; i++) {
    if (target % i === 0) {
        primeFactor = i;
    }
}

console.log(primeFactor);
