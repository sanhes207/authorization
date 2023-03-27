const Router = require('express');
const router = new Router;

const userController = require('../controllers/user.controller')

router.post('/login', userController.authorization);

router.get('/register', userController.register)

module.exports = router;