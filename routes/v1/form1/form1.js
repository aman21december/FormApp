const express = require("express");
const router = express.Router();

const { dispatcher } = require("../../../middleware");
const { createApi, basicInformation } = require("../../../controllers/v1");

const { PERMS, RESOURCES } = require("../../../utils/constant");
const { postbasicInformation, postOfficersDetails, postAddress } = require("../../../controllers/v1/form1/form1");
const auth = require("../../../middleware/auth");

router.get("/", auth,(req, res, next) =>
  dispatcher(req, res, next,basicInformation,RESOURCES.Form,PERMS.EDIT)
);

router.post("/basicInformation",auth, (req, res, next) =>
    dispatcher(req, res, next,postbasicInformation,RESOURCES.Form,PERMS.EDIT)
);
router.post("/officersDetails",auth, (req, res, next) =>
    dispatcher(req, res, next,postOfficersDetails,RESOURCES.Form,PERMS.EDIT)
);
router.post("/address",auth, (req, res, next) =>
  dispatcher(req, res, next,postAddress,RESOURCES.Form,PERMS.EDIT)
);


module.exports = router;
