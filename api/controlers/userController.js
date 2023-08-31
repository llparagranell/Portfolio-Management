const jwt = require("jsonwebtoken");
const User = require("../models/User");
const bcrypt = require("bcrypt");

exports.getusers = async (req,res) => {
  try{
    const data = await User.find();
    res.json(data)
}
catch(error){
    res.status(500).json({message: error.message})
}
}
exports.signup = async (req, res) => {
  try {
    const hashedPassword = bcrypt.hashSync(req.body.password, 12);

    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
    });

    await user.save();

    const payload = {
      id: user._id,
      name: user.name,
      email: user.email,
    };
    const token = jwt.sign(payload, process.env.tokenKey, { expiresIn: "2h" });
    res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .status(200)
      .json({
        name: user.name,
        key: user._id,
        token,
      });
  } catch (error) {
    console.log(error);
  }
};

exports.login = async (req, res) => {
  try {
    const user = await User.findOne({
      email: req.body.email,
    });
    if (!user) {
      return res.status(404).json("no user found");
    }
    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (!isPasswordCorrect) {
      return res.status(400).json("wrong password");
    }

    const payload = {
      id: user._id,
      name: user.name,
      email: user.email,
    };
    const token = jwt.sign(payload, process.env.tokenKey, { expiresIn: "2h" });
    res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .status(200)
      .json({
        name: user.name,
        key: user._id,
        token,
      });
  } catch (err) {
    res.status(500).json(err.message);
  }
};

exports.logout = (req, res) => {
  res.clearCookie("access_token");
  res.status(200).json("Logout success");
};
