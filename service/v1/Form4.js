const Fi = require("../../models/FinancialInformation")

class Form4{
    async postFinancialInformation(req,res,next){  
        try{

            
       await Fi.create({...req.body,collegeId:req.user.id})
       }
    catch(error){
        if (error.name === 'SequelizeValidationError') {
            const validationErrors = error.errors.map(err => err.message);
            return res.status(400).json({ errors: validationErrors });
          }
          res.status(500).json({ error: 'Something went wrong' });
    }
}
}

module.exports={Form4}