const jwt = require('jsonwebtoken');

const secretAuth = 'Ineedittowork';
const secretRefresh = 'Ineedtoittoworkstoo';

class Token {

  async getAuthToken(data){
    const token = jwt.sign(data, secretAuth, {
      expiresIn: '15m'
    })
    
    return token;
  }

  async getRefreshingToken(data) {
    const token = jwt.sign(data, secretRefresh, {
      expiresIn: '60d'
    })
    
    return token;
  }

  async verifyAuthToken(token) {
    if (!jwt.verify(token, secretAuth)) return false;
  }

  async verifyRefreshToken(token) {
    if (!jwt.verify(token, secretRefresh)) return false;
  }

}

module.exports = new Token();