const express = require("express");
const router = express.Router();

const { dispatcher } = require("../../../middleware");
const { createApi, basicInformation } = require("../../../controllers/v1");

const { PERMS, RESOURCES } = require("../../../utils/constant");
const { form3, postform3 } = require("../../../controllers/v1/form3");
const { form6, postforminfraConstruction, postforminfraRenovation } = require("../../../controllers/v1/form6");

router.get("/", (req, res, next) =>
  dispatcher(req, res, next,form6)
);

router.post("/infraConstruction", (req, res, next) =>
    dispatcher(req, res, next,postforminfraConstruction)
);

router.post("/infraRenovation", (req, res, next) =>
    dispatcher(req, res, next,postforminfraRenovation)
);

module.exports = router;