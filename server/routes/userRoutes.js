const router=require("express").Router();
const{test, getUser, deleteUser}=require("../controllers/userController")
router.get("/test",test);
router.get("/getuser/:id",getUser);
router.delete("/deleteuser/:id",deleteUser);

module.exports=router;