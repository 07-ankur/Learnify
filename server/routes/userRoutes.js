const router = require("express").Router();
const {
  test,
  getUser,
  updateUser,
  deleteUser,
} = require("../controllers/userController");
router.get("/test", test);
router.get("/getuser/:id", getUser);
router.put("/updateuser/:id", updateUser);
router.delete("/deleteuser/:id", deleteUser);

module.exports = router;
