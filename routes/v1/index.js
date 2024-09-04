const express = require("express");
const app = express();

const { general } = require("./general");
const { form1 } = require("./form1");
const { form2 } = require("./form2");

app.use("/", form1);
app.use("/form2",form2)
module.exports = app;
