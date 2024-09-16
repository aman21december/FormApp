const { Auth } = require("../../../service/v1/auth");

const login = async(req,res,next)=>{
    try {
        return await new Auth().login(req,res,next)
    } catch (error) {
      next(error);
    }  
}
const logout=async(req,res,next)=>{
  try{
    return await new Auth().logout(req,res,next)
  }catch(error){
    next(error)
  }
}

module.exports={login,logout};