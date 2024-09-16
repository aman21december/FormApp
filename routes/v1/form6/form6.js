const express = require("express");
const router = express.Router();

const { dispatcher } = require("../../../middleware");
const { createApi, basicInformation } = require("../../../controllers/v1");

const { PERMS, RESOURCES } = require("../../../utils/constant");
const { form3, postform3 } = require("../../../controllers/v1/form3");
const { form6, postforminfraConstruction, postforminfraRenovation } = require("../../../controllers/v1/form6");
const auth = require("../../../middleware/auth");

router.get("/",auth, (req, res, next) =>
  dispatcher(req, res, next,form6,RESOURCES.Form,PERMS.EDIT)
);

router.post("/infraConstruction",auth, (req, res, next) =>
    dispatcher(req, res, next,postforminfraConstruction,RESOURCES.Form,PERMS.EDIT)
);

router.post("/infraRenovation",auth, (req, res, next) =>
    dispatcher(req, res, next,postforminfraRenovation,RESOURCES.Form,PERMS.EDIT)
);

module.exports = router;