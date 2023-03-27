const db = require('../db/config');
const cokkie = require('cookie-parser');
const jwt = require('../utils/jwt');

class User {
  async authorization(req, res) {
    const {login, password} = req.body.data;

    console.log(login, password, req.body)

    const user = await db.query('SELECT login FROM users WHERE login = $1 AND password = $2;', [login, password]);

    if (user.rows.length == 0) res.send('Пользователь не найден');

    const accessToken = await jwt.getAuthToken(...user.rows)
    const refreshToken = await jwt.getRefreshingToken(...user.rows)

    await db.query('UPDATE users SET refresh_token = $1 WHERE login = $2;', [refreshToken, login])
      .catch(err => {
        res.send(err);
      })
 
    res.cookie('jwt', refreshToken, {
      httpOnly: true, 
      sameSite: 'None',
      secure: true,
      maxAge: 24 * 60 * 60 * 1000 
    });
    return res.json({ accessToken });
  }

  async register(req, res) {
    console.log(req);
  }
}

module.exports = new User();