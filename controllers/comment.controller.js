const { commentService } = require("../services");

//ADD COMMENT

const addComment = async (req, res) => {
  try {
    const body = req.body;
    console.log(body);

    const comment = await commentService.addComment(body);

    res.status(201).json({
      message: "comment Created success",
      data: comment,
    });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

//GET COMMENT
const getComment = async (req, res) => {
  const comment = await commentService.getComment();

  console.log(comment, "get");

  res.status(200).json({
    message: "product get success",
    data: comment,
  });
};

//EDIT COMMENT
const updateComment = async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;
    console.log(id, body);

    const comment = await commentService.updatecomment(id, body);

    res.status(200).json({
      message: "comment Edited success",
      data: comment,
    });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

//DELETE COMMENT
const deleteComment = async (req, res) => {
  try {
    console.log(req.params);
    const id = req.params.id;

    const comment = await commentService.deletecomment(id);
    if (!comment) {
      throw new Error("something went wrong");
    }

    res.status(200).json({
      message: "comment delete successfully",
      data: comment,
    });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};
module.exports = { addComment, getComment, updateComment, deleteComment };
