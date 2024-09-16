const express = require("express");
const router = express.Router();

const { dispatcher } = require("../../../middleware");
const { createApi, basicInformation } = require("../../../controllers/v1");

const { PERMS, RESOURCES } = require("../../../utils/constant");

const { form4, postform4 } = require("../../../controllers/v1/form4");
const auth = require("../../../middleware/auth");

router.get("/",auth, (req, res, next) =>
  dispatcher(req, res, next,form4,RESOURCES.Form,PERMS.EDIT)
);

router.post("/",auth, (req, res, next) =>
     dispatcher(req, res, next,postform4,RESOURCES.Form,PERMS.EDIT)
);


module.exports = router;