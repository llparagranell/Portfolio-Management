const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const router = require('./routes/userRouter');
const stockRouter = require('./routes/stockRouter')
const communityRouter = require('./routes/communityRouter')

const app = express();

const dotenv = require('dotenv');

dotenv.config();
app.use(cookieParser())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use("*",cors({ origin:'http://localhost:3000', credentials: true,optionSuccessStatus:200 }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
  
mongoose
  .connect(
  process.env.Mongo_Url,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("db is connected"))
  .catch((err) => console.log(err, "something went wrong"));

app.use('/api',router);
app.use('/stock',stockRouter)
app.use('/community',communityRouter)

app.listen(5000, (req,res)=>{
    console.log("Server Started on 5000");
})