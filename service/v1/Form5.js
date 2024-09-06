const iS = require("../../models/InfrastructureStatus");

class Form5{
    async postInfraStructure(req,res,next){         
        await iS.create(req.body); 
    }
}

module.exports={Form5};