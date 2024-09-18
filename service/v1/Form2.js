const PAFD = require("../../models/ProgrammeAndFacultyDetails");

class Form2{
    async postPafd(req,res,next){
        try{
            const arr=req.body
            console.log(arr)
         for(let i=0;i<arr.length;i++)
         {
            console.log(req.user.id)
             await PAFD.create({...arr[i],collegeId:req.user.id})
         }
        }catch(error){
            if (error.name === 'SequelizeValidationError') {
                const validationErrors = error.errors.map(err => err.message);
                return res.status(400).json({ errors: validationErrors });
              }
              res.status(500).json({ error: 'Something went wrong' });
        }
    }
}

module.exports={Form2}