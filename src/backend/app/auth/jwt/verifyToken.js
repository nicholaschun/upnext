import jwt from "jsonwebtoken";
import fs from "fs";
import path from "path";

let i = "upnext";
let s = "admin@up-next.co";
let a = "up-next.co/apps";
let expire = "365d";

const publicKey = fs
  .readFileSync(path.resolve(__dirname, "keys/public.key"))
  .toString("utf8");

module.exports = function verifyToken(req, res, next){
    const verifyOptions = {
      issuer: i,
      subject: s,
      audience: a,
      expiresIn: expire,
      algorithms: ["RS256"]
    };

    let tokenH = req.header('Authorization');
    let parts = tokenH.split(' ')
    let token = parts[1]
    console.log(token)
    try {
      const result = jwt.verify(token, publicKey, verifyOptions);
      console.log(result)
      req.user = result.user
      return next()
    } catch (error) {
        console.log(error)
      return res.status(401).json({ message: "Unathorized access" });
    }
}
