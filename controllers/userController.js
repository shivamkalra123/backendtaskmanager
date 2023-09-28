const userModel = require("../model/userModel");
const encryptanddecrypt = require("../utils/bcrypt");

const loginController = async (request, response) => {
  try {
    const {email,password} = request.body; // orignal pssword

    const user = await userModel.findOne({email:email}); // hashed password
    if(user && user._id){
        if(encryptanddecrypt.matchPwd(password,user.password)){
            response.status(200).json({message:"Login Successfully"})
        }
        else{
            response.status(403).json({message:"Invalid password"})
        }
    }
    else{
        response.status(404).json({message:"User Not Found"})
    }
  } catch (error) {
    response.status(500).json({ message: "Internal Server error" });
  }
};
const registerController = async (request, response) => {
  try {
    const { username, email, password } = request.body;

    const hashPwd = await encryptanddecrypt.hashPwd(password);

    const user = await userModel.create({
      email: email,
      username: username,
      password: hashPwd,
    });
    if (user && user._id) {
      response.status(201).json({ message: "User Register successfully" });
    } else {
      response.status(404).json({ message: "User Not Register " });
    }
  } catch (error) {
    response.status(500).json({ message: "Internal Server error" });
  }
};


module.exports = {loginController,registerController}