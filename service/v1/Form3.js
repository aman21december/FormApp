const LDOCW = require("../../models/LegacyDataOfCivilWork")

class Form3{
    async postLDOCW(req,res,next){
        const arr=req.body
         
         for(let i=0;i<arr.length;i++)
         {
             await LDOCW.create({...arr[i],collegeId:req.user.id})
         } 
    }
}
module.exports={Form3}