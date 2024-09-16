const iS = require("../../models/InfrastructureStatus");

class Form5{
    async postInfraStructure(req,res,next){         
        await iS.create({...req.body,collegeId:req.user.id}); 
    }
}

module.exports={Form5};