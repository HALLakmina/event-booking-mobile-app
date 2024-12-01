const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET;
const JWT_EXPIRE = process.env.JWT_EXPIRE;

function generateJwtToken(email, id) {
    return jwt.sign({ email, id }, JWT_SECRET, {
        expiresIn: JWT_EXPIRE,
    });
}
module.exports = { generateJwtToken }