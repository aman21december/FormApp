const LDOCW = require("../../models/LegacyDataOfCivilWork")

class Form3{
    async postLDOCW(req,res,next){
        try{

        
        const arr=req.body
         
         for(let i=0;i<arr.length;i++)
         {
             await LDOCW.create({...arr[i],collegeId:req.user.id})
         }
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
module.exports={Form3}