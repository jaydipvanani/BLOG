const { commentSchema } = require("../models");

const getComment = () => {
  return commentSchema.find().populate("user");
};
const addComment = (body) => {
  return commentSchema.create(body);
};
const updateComment = (id, body) => {
  return commentSchema.findByIdAndUpdate(id, { $set: body });
};
const deleteComment = (id) => {
  return commentSchema.findByIdAndDelete(id);
};
module.exports = { addComment, getComment, updateComment, deleteComment };
