const OfficersDetails = require("../../models/OfficersDetails")
const BasicInformation = require("../../models/BasicInformation");
const Address = require("../../models/AddressDetail");

class Form1{
    async postBasicInformation(req,res,next){

        const basicInformation=await BasicInformation.create({...req.body,collegeId:req.user.id});
        return basicInformation;

    }
    async postOfficersDetails(req,res,next){
        console.log(req.body)
        const officersDetails=await OfficersDetails.create({...req.body,collegeId:req.user.id});
        return officersDetails;
    }
    async postAddress(req,res,next){
        const postAdress=await Address.create({...req.body,collegeId:req.user.id});
        return postAdress;
    }
}
module.exports={Form1}