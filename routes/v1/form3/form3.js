const express = require("express");
const router = express.Router();

const { dispatcher } = require("../../../middleware");
const { createApi, basicInformation } = require("../../../controllers/v1");

const { PERMS, RESOURCES } = require("../../../utils/constant");
const { form3, postform3 } = require("../../../controllers/v1/form3");

router.get("/", (req, res, next) =>
  dispatcher(req, res, next,form3)
);

router.post("/", (req, res, next) =>
    dispatcher(req, res, next,postform3)
);


module.exports = router;