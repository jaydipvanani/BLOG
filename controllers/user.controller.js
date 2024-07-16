const { createToken } = require("../middlewares/auth");
const { userService } = require("../services");
let cook

//ADD or REGISTER

const addUser = async (req, res) => {
  try {
    const body = req.body;
    console.log(body);

    const userExist = await userService.getuserByemail(body.email);

    if (userExist) {
      throw new Error("user already exist");
    }

    const user = await userService.addUser(body);

    if (!user) {
      throw new Error("something went wrong");
    }

    res.status(201).json({
      message: "user Created success",
      data: user,
    });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};

//LOG-IN
const loginUser = async (req, res) => {
  try {
    let { email, password } = req.body
    let user = await userService.findUser(email)
   // console.log("🚀 ~ loginUser ~ user:", user)
    if (!user) {
      throw new Error("user not found");
    }
    if (user.password !== password) {
      throw new Error("password is incorrect");
    }
    let token = createToken({ user });
   // console.log("🚀 ~ userlogin ~ token:", token)
    res.cookie("token", token)
    res.status(201).json({
      token: token

    })
  } catch (error) {
    res.status(500).json({
     // message: error.message,
    });
  }
};

//GET
const getUser = async (req, res) => {
  const user = await userService.getUser();

  console.log(user, "get");

  res.status(200).json({
    message: "product get success",
    data: user,
  });
};

//UPDATE
const updateUser = async (req, res) => {
  try {
    const id = req.params.id;
    const body = req.body;
    console.log(id, body);

    // const userExist = await userService.getuserByemail(body.email);
    // if (userExist) {
    //   throw new Error("user already exist");
    // }
    // const user = await userService.updateUser(id, body);
    // if (!user) {
    //   throw new Error("something went wrong");
    // }
    const user = await userService.updateUser(id, body);

    res.status(200).json({
      message: "user updated success",
      data: user,
    });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};



//DELETE
const deleteUser = async (req, res) => {
  try {
    console.log(req.params);
    const id = req.params.id;

    const user = await userService.deleteUser(id);
    if (!user) {
      throw new Error("something went wrong");
    }

    res.status(200).json({
      message: "user delete success",
      data: user,
    });
  } catch (err) {
    res.status(400).json({ success: false, message: err.message });
  }
};
module.exports = { addUser, loginUser, getUser, updateUser, deleteUser };
