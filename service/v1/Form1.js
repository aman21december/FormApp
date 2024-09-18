const OfficersDetails = require("../../models/OfficersDetails")
const BasicInformation = require("../../models/BasicInformation");
const Address = require("../../models/AddressDetail");
const joi =require('joi');
class Form1{
    async postBasicInformation(req,res,next){
        try{
        const basicInformation=await BasicInformation.create({...req.body,collegeId:req.user.id});
        return basicInformation;
        }
        catch(error)
        {
            if (error.name === 'SequelizeValidationError') {
                const validationErrors = error.errors.map(err => err.message);
                return res.status(400).json({ errors: validationErrors });
              }
              res.status(500).json({ error: 'Something went wrong' });
        }
    }
    async postOfficersDetails(req,res,next){
        try{
            const officersDetails=await OfficersDetails.create({...req.body,collegeId:req.user.id});
            return officersDetails;
        }
        catch(error)
        {
            if (error.name === 'SequelizeValidationError') {
                const validationErrors = error.errors.map(err => err.message);
                return res.status(400).json({ errors: validationErrors });
              }
              res.status(500).json({ error: 'Something went wrong' });
        }
        
    }
    async postAddress(req,res,next){
        try{
        const postAdress=await Address.create({...req.body,collegeId:req.user.id});
        return postAdress;
        }catch(error){
            if (error.name === 'SequelizeValidationError') {
                const validationErrors = error.errors.map(err => err.message);
                return res.status(400).json({ errors: validationErrors });
              }
              res.status(500).json({ error: 'Something went wrong' });
        }
    }
}
module.exports={Form1}