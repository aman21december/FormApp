const express = require("express");
const router = express.Router();

const { dispatcher } = require("../../../middleware");
const { createApi, basicInformation } = require("../../../controllers/v1");

const { PERMS, RESOURCES } = require("../../../utils/constant");
const { postbasicInformation, postOfficersDetails, postAddress } = require("../../../controllers/v1/form1/form1");
const { form2, postform2 } = require("../../../controllers/v1/form2");
const auth = require("../../../middleware/auth");

router.get("/",auth, (req, res, next) =>
  dispatcher(req, res, next,form2,RESOURCES.Form,PERMS.EDIT)
);

router.post("/",auth, (req, res, next) =>
    dispatcher(req, res, next,postform2,RESOURCES.Form,PERMS.EDIT)
);


module.exports = router;
