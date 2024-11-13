const crypto = require("crypto");

const ts = "1";
const publicKey = "eba4d2141c40603bf4a56df7e742fb49";
const privateKey = "f21068299ae5981eabb862141d50b57157ff05f6";
const hash = crypto
    .createHash("md5")
    .update(ts + privateKey + publicKey)
    .digest("hex");

console.log(hash);