const express = require("express");
const { blogController } = require("../controllers");
const { isLogin, isRestrict } = require("../middlewares/auth");

const route = express.Router();
route.get("/get",isLogin,isRestrict(["admin","user"]) , blogController.getBlog);
route.post("/add",isLogin,isRestrict(["admin","user"]) , blogController.addBlog);
route.delete("/delete/:id",isLogin,isRestrict(["admin","user"]) , blogController.deleteBlog);
route.put("/update/:id",isLogin,isRestrict(["admin","user"]) , blogController.updateBlog);

module.exports = route;
