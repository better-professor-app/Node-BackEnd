const jwt = require('jsonwebtoken')
const secret = require('../token/secret')


module.exports = function generateToken(professor) {
    const payload = {
      subject: professor.id, 
      username: professor.username,
    };

    const options = {
      expiresIn: '7d',
    };

    return jwt.sign(payload, secret.jwtSecret, options)

  } 