const express = require("express");
const router = express.Router();

const { dispatcher } = require("../../../middleware");
const { createApi, basicInformation } = require("../../../controllers/v1");

const { PERMS, RESOURCES } = require("../../../utils/constant");
const { form3, postform3 } = require("../../../controllers/v1/form3");
const auth = require("../../../middleware/auth");

router.get("/", auth,(req, res, next) =>
  dispatcher(req, res, next,form3,RESOURCES.Form,PERMS.EDIT)
);

router.post("/", auth,(req, res, next) =>
    dispatcher(req, res, next,postform3,RESOURCES.Form,PERMS.EDIT)
);


module.exports = router;