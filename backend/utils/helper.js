const jwt = require('jsonwebtoken');

const jwtSecretKey = 'your-secret-key';

function generateToken(payload) {
  return jwt.sign(payload, jwtSecretKey, { expiresIn: '1h' });
}

function verifyToken(token) {
  return jwt.verify(token, jwtSecretKey);
}

module.exports = { generateToken, verifyToken };
