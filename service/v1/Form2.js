const PAFD = require("../../models/ProgrammeAndFacultyDetails");

class Form2{
    async postPafd(req,res,next){
        const arr=req.body
         console.log(arr)
         for(let i=0;i<arr.length;i++)
         {
             await PAFD.create(arr[i])
         } 
    }
}

module.exports={Form2}