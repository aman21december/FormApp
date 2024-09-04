const express = require("express");
const router = express.Router();

const { dispatcher } = require("../../../middleware");
const { createApi, basicInformation } = require("../../../controllers/v1");

const { PERMS, RESOURCES } = require("../../../utils/constant");
const { postbasicInformation, postOfficersDetails, postAddress } = require("../../../controllers/v1/form1/form1");

router.get("/form1", (req, res, next) =>
  dispatcher(req, res, next,basicInformation)
);

router.post("/basicInformation", (req, res, next) =>
    dispatcher(req, res, next,postbasicInformation)
);
router.post("/officersDetails", (req, res, next) =>
    dispatcher(req, res, next,postOfficersDetails)
);
router.post("/address", (req, res, next) =>
  dispatcher(req, res, next,postAddress)
);


module.exports = router;
