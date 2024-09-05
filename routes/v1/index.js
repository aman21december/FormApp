const express = require("express");
const app = express();

const { general } = require("./general");
const { form1 } = require("./form1");
const { form2 } = require("./form2");
const { form3 } = require("./form3");
const { form6 } = require("./form6");

app.use("/", form1);
app.use("/form2",form2)
app.use("/form3",form3)
app.use("/form6",form6)
module.exports = app;
