const { Form1 } = require("../../../service/v1/Form1");

const basicInformation = async (req, res, next) => {
    try {
        res.render("form1.ejs")
    } catch (error) {
      next(error);
    }
  };
  const postbasicInformation = async (req, res, next) => {
    try {
        return await new Form1().postBasicInformation(req,res,next)
    } catch (error) {
      next(error);
    }
  };
  const postOfficersDetails = async (req, res, next) => {
    try {
        return await new Form1().postOfficersDetails(req,res,next)
    } catch (error) {
      next(error);
    }
  };
  const postAddress = async (req, res, next) => {
    try {
        return await new Form1().postAddress(req,res,next)
    } catch (error) {
      next(error);
    }
  };

  module.exports={basicInformation,postbasicInformation,postOfficersDetails,postAddress};