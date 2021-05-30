const  express=require("express");
var router = express.Router();
const multer = require('multer');
const { v4: uuidv4 } = require('uuid');
let path = require('path');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const UserManagement=require("../../models/UserManagementModel");
const userModel=require("../../models/userModel");

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
     
        cb(null, './public/Management');
    },
    filename: function(req, file, cb) {   
        cb(null, uuidv4() + '-' + Date.now() + path.extname(file.originalname));
    }
});


const fileFilter = (req, file, cb) => {
    const allowedFileTypes = ['image/jpeg', 'image/jpg', 'image/png'];
    if(allowedFileTypes.includes(file.mimetype)) {
        cb(null, true);
    } else {
        cb(null, false);
    }
}

let upload = multer({ storage, fileFilter });


router.route('/').post(upload.single('photo'),async (req, res) => {

   var email =req.body.Email;
   var Position =req.body.Position;
   var Name =req.body.Name;
   var Gender =req.body.Gender;
   var password =req.body.Password;
   const photo = req.file.filename;

  

   if(!email || !Position ||!Name || !Gender ||!password)
    return res
    .status(400)
    .json({errorMessage: "Please enter all required fields"});

    const salt = await bcrypt.genSalt();
    const passwordHash= await bcrypt.hash(password, salt);

      const userType = Position;
    const UserManage= new  UserManagement({
        email,
        Position,
        Name,
        Gender,
        passwordHash,
        photo
    });

    await UserManage.save().then(()=>{
        
        const newUser = new userModel({
            email,userType, passwordHash
        });
            const saveUser =  newUser.save();
                const token=jwt.sign({
                    user:saveUser._id
                }, process.env.JWT_SECRET);
                
                res.cookie("token",token,{
                    httpOnly:true
                })
          res.json({status:"Add a new user to the system"});

    }).catch((err) =>{
        
        console.log("User addning error");
        console.log(err);
    });
});

module.exports=router;