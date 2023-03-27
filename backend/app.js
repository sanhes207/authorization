const express = require('express');
const cookieparser = require('cookie-parser');
const cors = require('cors');

const userRouter = require('./routes/user.route');
const db = require('./db/config');

const APP = express();
const PORT = process.env.PORT || 8080;
const corsOptions = {
	origin: "http://127.0.0.1:5500",
	credentials: true,            //access-control-allow-credentials:true
	optionSuccessStatus:200
}

db.connect((err) => {
  const msg = err? `Error message: ${err}` : `Connected success`;

  console.log(msg); 
})

APP.use(express.json());
APP.use(express.urlencoded({ extended: false }));
APP.use(cookieparser());
APP.use(cors(corsOptions));

APP.use('/api', userRouter);

APP.listen(PORT, () => {
  console.log('Есть контакт');
})