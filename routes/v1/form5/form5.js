const express = require("express");
const router = express.Router();

const { dispatcher } = require("../../../middleware");
const { createApi, basicInformation } = require("../../../controllers/v1");

const { PERMS, RESOURCES } = require("../../../utils/constant");

const { form5, postform5 } = require("../../../controllers/v1/form5");

router.get("/", (req, res, next) =>
  dispatcher(req, res, next,form5)
);

router.post("/", (req, res, next) =>
     dispatcher(req, res, next,postform5)
);


module.exports = router;