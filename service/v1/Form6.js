const iC = require("../../models/infraConstruction")
const iR = require("../../models/InfraRenovation")

class Form6{
    async postInfraConstruction(req,res,next){
        const arr=req.body
        for(let i=0;i<arr.length;i++)
        {
            await iC.create({...arr[i],collegeId:req.user.id})
        }
    }
    async postInfraRenovation(req,res,next){
        const arr=req.body
        for(let i=0;i<arr.length;i++)
        {
            await iR.create({...arr[i],collegeId:req.user.id})
        }
    }
}
module.exports={Form6}