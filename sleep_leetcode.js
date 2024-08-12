<<<<<<< HEAD

=======
>>>>>>> ef7c8a558bd5856552de70cccdb07a62cb676dde
/**
 * @param {number} millis
 * @return {Promise}
 */
async function sleep(millis) {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(millis);
        },millis)
    })
}

/** 
 * let t = Date.now()
 * sleep(100).then(() => console.log(Date.now() - t)) // 100
<<<<<<< HEAD
 */
=======
 */
>>>>>>> ef7c8a558bd5856552de70cccdb07a62cb676dde
