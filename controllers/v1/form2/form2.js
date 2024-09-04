const { Form2 } = require("../../../service/v1/Form2");

const form2 = async (req, res, next) => {
    try {
        res.render("form2.ejs")
    } catch (error) {
      next(error);
    }
  };
  const postform2 = async (req, res, next) => {
    try {
        return await new Form2().postPafd(req,res,next)
    } catch (error) {
      next(error);
    }
  };

  module.exports={form2,postform2};