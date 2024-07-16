const express = require("express");
const validate = require("../middlewares/validate");
const { adminValidation } = require("../validations");
const { adminController } = require("../controllers");
const { isLogin, isRestrict } = require("../middlewares/auth");

const route = express.Router();
route.get("/get",isLogin,isRestrict(["admin","user"]) , adminController.getAdmin);
route.post(
  "/register",
  validate(adminValidation.addadmin),
  adminController.addAdmin
);
route.post("/login", adminController.loginAdmin);
route.delete("/delete/:id",isLogin,isRestrict(["admin","user"]) , adminController.deleteAdmin);
route.put(
  "/update/:id",isLogin,isRestrict(["admin","user"]) ,
  validate(adminValidation.addadmin),
  adminController.updateAdmin
);

module.exports = route;
