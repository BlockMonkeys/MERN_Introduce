const express = require("express");
const { nodeMail } = require("../controller/mail");

const globalRouter = express.Router();

globalRouter.post("/mail", nodeMail);

module.exports = globalRouter;