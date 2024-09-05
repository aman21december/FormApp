const { Form4 } = require("../../../service/v1/Form4");

const  form4 = async (req, res, next) => {
    try {
        res.render("form4.ejs")
    } catch (error) {
      next(error);
    }
  };
  const postform4 = async (req, res, next) => {
    try {
        return await new Form4().postFinancialInformation(req,res,next)
    } catch (error) {
      next(error);
    }
  };
 module.exports ={
    form4, postform4
 } 