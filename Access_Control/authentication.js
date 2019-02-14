var cryptop = require('crypto');
var credentials = require('credentials');
var speakeasy = require('speakeasy');
/* -- this functions prevents from rainbow table */
 function hashPassword(keyle, callback) {
    cryptop.randomBytes(keyle, function(er, buf) {
        if(er) {
            callback(er)
        }
        else {
            callback(null, buf.toString('base64'));
        }
    })
}



/* using credential modules */

function makeHasPashPassword(urPassword, callback) {
    credentials.hash(urPassword, (err, hash)=> {
        if(err) {
            callback(err, null)
        }
        else {
            callback(null, hash)
        }
    })
}

makeHasPashPassword("olatunde", (er, hash)=> {
    if(er) {
        console.log(er)
    }
    else {
        console.log(hash)
    }
})

/* speakeasy */
function generatekey(len) {
    var key = speakeasy.generate_key({
        length:len,
        google_auth_qr: false
    })

    return key.base32;
}

console.log(generatekey(20))