const instance = axios.create({
  withCredentials: true,
  baseURL: "http://localhost:8080/api"
});
  
async function auth(data) {
  await instance.post('/login', {
    data
  })
  .then(res => {
    console.log(res);
  })
}

async function reg() {
  await instance.get('/register')
    .then(res => {
      console.log(res);
    })
}

export {
  auth,
  reg
};