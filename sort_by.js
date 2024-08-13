/**
 * @param {Array} arr
 * @param {Function} fn
 * @return {Array}
 */
var sortBy = function(arr, fn) {
    return arr.sort((a,b)=>{
        const fna_res = fn(a);
        const fnb_res = fn(b);
        return fna_res - fnb_res;
    })
};