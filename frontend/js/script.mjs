import {auth, reg} from './axios.js'

const authBtn = document.querySelector('.btn__auth');
const gggBtn = document.querySelector('.ggg');

authBtn.addEventListener('click', (e) => {
  const inputLogin = document.querySelector('.form .login__input');
  const inputPassword = document.querySelector('.form .password__input');

  const data = {
    login: inputLogin.value,
    password: inputPassword.value
  }

  auth(data);
})

gggBtn.addEventListener('click', () => {
  reg();
})