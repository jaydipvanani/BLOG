const express = require("express");
const { commentController } = require("../controllers");
const { isRestrict, isLogin } = require("../middlewares/auth");

const route = express.Router();
route.get("/get",isLogin,isRestrict(["admin","user"]) , commentController.getComment);
route.post("/add",isLogin,isRestrict(["admin","user"]) , commentController.addComment);
route.delete("/delete/:id",isLogin,isRestrict(["admin","user"]) , commentController.deleteComment);
route.put("/update/:id",isLogin,isRestrict(["admin","user"]) , commentController.updateComment);

module.exports = route;
