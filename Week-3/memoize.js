/**
 * Caching the addition results with arguments
 * 
 * @param {*} fn 
 * @returns 
 */

function memoize(fn) {
    const cache = new Map();
    return function(...args) {
        args.sort();
        const key = args.toString();
        if(cache.has(key)) {
            console.log("Found In Cache...");
            return cache.get(key);
        }

        console.log("Not found in cache, computing...");
        cache.set(key, fn(...args));
        return cache.get(key);
    }
}

/**
 * method to add n number of arguments
 * 
 * @param  {...any} args 
 * @returns 
 */
function add(...args) {
    return args.reduce(function(a,b){
        return a+b;
    });
}

const memoizeAdd = memoize(add);

console.log(memoizeAdd(100,200));
console.log(memoizeAdd(100,200,300));
console.log(memoizeAdd(100,300,200));
console.log(memoizeAdd(200,100));