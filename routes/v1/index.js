const express = require("express");
const app = express();

const { general } = require("./general");
const { form1 } = require("./form1");
const { form2 } = require("./form2");
const { form3 } = require("./form3");
const { form6 } = require("./form6");
const { form4 } = require("./form4");
const { form5 } = require("./form5");
const { auth } = require("./auth");
const { deopanel } = require("./Deopanel");
const { main } = require("./main");
app.use("/index",main)
app.use("/deopanel",deopanel)
app.use("/auth",auth)
app.use("/form1", form1);
app.use("/form2",form2)
app.use("/form3",form3)
app.use("/form4",form4)
app.use("/form5",form5)
app.use("/form6",form6)
module.exports = app;
