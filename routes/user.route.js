const express = require("express");
const validate = require("../middlewares/validate");
const { userValidation } = require("../validations");
const { userController } = require("../controllers");
const { isLogin, isRestrict } = require("../middlewares/auth");

const route = express.Router();
route.get("/get", isLogin,isRestrict(["admin","user"]) ,userController.getUser);
route.post(
  "/register",
  validate(userValidation.adduser),
  userController.addUser
);
route.post("/login", userController.loginUser);
route.delete("/delete/:id",isLogin,isRestrict(["admin","user"]) , userController.deleteUser);
route.put(
  "/update/:id",isLogin,isRestrict(["admin","user"]) ,
  validate(userValidation.adduser),
  userController.updateUser
);

module.exports = route;
