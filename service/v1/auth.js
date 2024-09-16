const { ErrorHandler } = require("../../helper");
const { UNAUTHORIZED, SERVER_ERROR } = require("../../helper/status-codes");
const { User } = require("../../models/User");
const jwt=require("jsonwebtoken")
class Auth{
    async login(req,res,next){
       try{
        const username = req.body.username;
       const password = req.body.password;
       const user=await User.findOne({
        where:{
            username,password
        }
       })  
       if (!user) {
         throw new ErrorHandler(UNAUTHORIZED,"Invalid email or password");
        }
       const token = jwt.sign({ id: user.id }, process.env.JWT_PRIVATE_KEY, { expiresIn: '7d' });
        const options={
            expires:new Date(Date.now()+7*24*60*60*1000),
            httpOnly:true,
            
        }
        if(user.role==="COLLEGE"){
        res.status(200).cookie("token",token,options).redirect("/v1/form1")
        }
        else if(user.role==="DEO"){
            res.status(200).cookie("token",token,options).redirect("/v1/deopanel")
        }
       }catch(err){
        //  if (err.statusCode)throw new ErrorHandler(err.statusCode,err.message);
        //  throw new ErrorHandler(SERVER_ERROR,err);
        return(next(err))
       } 
    }
    async logout(req,res,next){
        res.cookie("token",null,{
            expires:new Date(Date.now()),
            httpOnly:true
        })
        res.status(200).redirect("/v1/index")
    }
}

module.exports={Auth}