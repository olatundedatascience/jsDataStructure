var cryptop = require('crypto');
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

/* this function prevent from brute force */

function createSalt()

