const { Form3 } = require("../../../service/v1/Form3");

const    form3 = async (req, res, next) => {
    try {
        res.render("form3.ejs")
    } catch (error) {
      next(error);
    }
  };
  const postform3 = async (req, res, next) => {
    try {
        return await new Form3().postLDOCW(req,res,next)
    } catch (error) {
      next(error);
    }
  };
module.exports={form3,postform3}