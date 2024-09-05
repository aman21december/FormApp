const { Form6 } = require("../../../service/v1/Form6");


const form6 = async (req, res, next) => {
    try {
        res.render("form6.ejs")
    } catch (error) {
      next(error);
    }
  };
  const postforminfraConstruction = async (req, res, next) => {
    try {
        return await new Form6().postInfraConstruction(req,res,next)
    } catch (error) {
      next(error);
    }
  };
  const postforminfraRenovation = async (req, res, next) => {
    try {
        return await new Form6().postInfraRenovation(req,res,next)
    } catch (error) {
      next(error);
    }
  };
module.exports={form6,postforminfraConstruction,postforminfraRenovation}