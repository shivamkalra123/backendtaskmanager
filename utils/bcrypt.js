const bcrypt = require('bcrypt');

const encryptanddecrypt ={

    hashPwd(originalPWD){
        const hashedPwd = bcrypt.hashSync(originalPWD,10);
        return hashedPwd;
    },
    matchPwd(originalPWD,hashedPwd){

        const matchedorNot = bcrypt.compareSync(originalPWD,hashedPwd);

        return matchedorNot;

    }
}

module.exports = encryptanddecrypt;