const jwt=require("jsonwebtoken")
const userDB=require("../models/userModal")

const checkLogin=async(req,res,next)=>{
    var token;
    if(req.headers.authorization&&req.headers.authorization.startsWith('Bearer')){
        try {
            token=token=req.headers.authorization.split(' ')[1];
            const decoded= jwt.verify(token,process.env.JWTSECRET);
            const user=await userDB.findById({_id:decoded})
            const {password,createdAt,updatedAt,...others}=user._doc;
            req.user=others;
            next();

        } catch (error) {
            res.status(400).json({message:"User not authorized"})
        }
    }
    else{
        res.status(400).json({message:"User not authorized"})
    }
}

module.exports= checkLogin;