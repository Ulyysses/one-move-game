const crypto = require("crypto");

class SecurityFunctions {
  generateRandomKey() {
    return crypto.randomBytes(32).toString("hex");
  }

  generateHmac(value, key) {
    return crypto.createHmac("sha3-256", key).update(value).digest("hex");
  }
}

module.exports = SecurityFunctions;
