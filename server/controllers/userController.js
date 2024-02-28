const userDB=require("../models/userModal")
const asyncHandler=require("express-async-handler")
const test=asyncHandler(async(req,res)=>{
    res.status(200).json({message:"User API established"})
})

const getUser=asyncHandler(async(req,res)=>{
     const id=req.params.id; 
     const findUser=await userDB.findById({_id:id})
     if(findUser){
        res.status(200).json({message:"User found",findUser})
     }
     else{
        res.status(404).json({message:"User not found"});
     }

})

const deleteUser=asyncHandler(async(req,res)=>{
    const id=req.params.id;
    const userId=req.params.id;
    if(id!==userId){
        res.status(400)
        throw new Error("Cannot delete someone elses account")
    }
    else{
        const deletedUser=await userDB.findByIdAndDelete({_id:id});
        if(deletedUser){
            res.status(200).json({message:"Successfully deleted user"})

        }
        else{
            res.status(400)
            throw new Error("Error in deleting user");
        }
    }
})


module.exports={test,getUser,deleteUser};