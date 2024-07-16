let jwt = require("jsonwebtoken")

let createToken = (data) => {
    // console.log(data , "jhkjhkjhjk");
    let token = jwt.sign(data, process.env.JWT, { expiresIn: "1d" })
    return token
}

let isLogin = (req, res, next) => {

    try {
        let token = req.cookies["token"]
        //  console.log("🚀 ~ isLogin ~ token:", token)

        if (!token) {
            throw new Error("user not login");
        }
        let user = jwt.verify(token, process.env.JWT);
        // console.log("🚀 ~ isLogin ~ user:", user)
        req.user = user;
        next();
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
}

let isRestrict = ([...role]) => {
    return (req, res, next) => {
        // console.log("🚀 ~ return ~ req:", req.user.user.role)
        try {
            if (role.includes(req.user.user.role)) {
                next();
            }
            else {
                throw new Error(`${req.user.user.role} "not allowed"`);
            }
        } catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    }
}

module.exports = { createToken, isLogin, isRestrict }