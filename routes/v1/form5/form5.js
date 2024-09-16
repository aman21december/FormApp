const express = require("express");
const router = express.Router();

const { dispatcher } = require("../../../middleware");
const { createApi, basicInformation } = require("../../../controllers/v1");

const { PERMS, RESOURCES } = require("../../../utils/constant");

const { form5, postform5 } = require("../../../controllers/v1/form5");
const auth = require("../../../middleware/auth");

router.get("/", auth,(req, res, next) =>
  dispatcher(req, res, next,form5,RESOURCES.Form,PERMS.EDIT)
);

router.post("/", auth,(req, res, next) =>
     dispatcher(req, res, next,postform5,RESOURCES.Form,PERMS.EDIT)
);


module.exports = router;