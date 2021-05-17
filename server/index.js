const express = require("express");
const app = express();
require('dotenv').config();
const PORT = 5000;
const cors = require("cors");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const globalRouter = require("./router/globalRouter");

app.use('/static', express.static(__dirname + '/public'));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.use('/api', globalRouter);

app.listen(PORT, ()=> console.log(`✅ SERVER Running At Port : ${PORT}`));