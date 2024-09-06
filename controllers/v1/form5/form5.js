const { Form5 } = require("../../../service/v1/Form5");

const  form5 = async (req, res, next) => {
    try {
        res.render("form5.ejs")
    } catch (error) {
      next(error);
    }
  };
  const postform5 = async (req, res, next) => {
    try {
        return await new Form5().postInfraStructure(req,res,next)
    } catch (error) {
      next(error);
    }
  };
 module.exports ={
    form5, postform5
 } 