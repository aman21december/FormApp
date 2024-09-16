const Fi = require("../../models/FinancialInformation")

class Form4{
    async postFinancialInformation(req,res,next){         
       await Fi.create({...req.body,collegeId:req.user.id})
       }
}

module.exports={Form4}