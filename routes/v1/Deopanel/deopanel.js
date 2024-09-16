const express = require("express");
const router = express.Router();

const { dispatcher } = require("../../../middleware");
const { createApi, basicInformation } = require("../../../controllers/v1");

const { PERMS, RESOURCES } = require("../../../utils/constant");
const { postbasicInformation, postOfficersDetails, postAddress } = require("../../../controllers/v1/form1/form1");
const { login, logout } = require("../../../controllers/v1/auth");
const { getData } = require("../../../controllers/v1/DeoPanel");
const auth = require("../../../middleware/auth");

router.get("/", auth,(req, res, next) =>
  dispatcher(req, res, next,getData,RESOURCES.DEOPANEL,PERMS.VIEW)
);


module.exports = router;
