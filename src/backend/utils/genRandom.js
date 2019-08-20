import crypto from "crypto";
import bcrypt from "bcrypt"
module.exports = {
    genToken(val){
       return crypto.createHash("sha256").update(val).digest("hex");
    },
    encryptPass(password){
        return bcrypt.hashSync(password, 10)
    }
}