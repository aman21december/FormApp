const express = require("express");
const router = express.Router();

const { dispatcher } = require("../../../middleware");
const { createApi, basicInformation } = require("../../../controllers/v1");

const { PERMS, RESOURCES } = require("../../../utils/constant");

const { form4, postform4 } = require("../../../controllers/v1/form4");

router.get("/", (req, res, next) =>
  dispatcher(req, res, next,form4)
);

router.post("/", (req, res, next) =>
     dispatcher(req, res, next,postform4)
);


module.exports = router;