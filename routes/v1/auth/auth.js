const express = require("express");
const router = express.Router();

const { dispatcher } = require("../../../middleware");
const { createApi, basicInformation } = require("../../../controllers/v1");

const { PERMS, RESOURCES } = require("../../../utils/constant");
const { postbasicInformation, postOfficersDetails, postAddress } = require("../../../controllers/v1/form1/form1");
const { login, logout } = require("../../../controllers/v1/auth");

router.post("/login", (req, res, next) =>
  dispatcher(req, res, next,login)
);
router.get("/logout",(req,res,next)=>
  dispatcher(req,res,next,logout)
)

module.exports = router;
