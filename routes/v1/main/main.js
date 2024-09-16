const express = require("express");
const router = express.Router();

const { dispatcher } = require("../../../middleware");
const { createApi, basicInformation } = require("../../../controllers/v1");

const { PERMS, RESOURCES } = require("../../../utils/constant");
const { postbasicInformation, postOfficersDetails, postAddress } = require("../../../controllers/v1/form1/form1");
const auth = require("../../../middleware/auth");
const { mainfunc } = require("../../../controllers/v1/main");

router.get("/", (req, res, next) =>
  dispatcher(req, res, next,mainfunc)
);



module.exports = router;
