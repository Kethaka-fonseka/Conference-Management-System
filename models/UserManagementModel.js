const mongoose=require('mongoose');
const schema=mongoose.schema;

const UserManagementSchema = new mongoose.Schema({

email:{
    type:String,
    required: true
},
Position:{
    type:String,
    required: true
},

Name:{
    type:String,
    required: true
},
Gender:{
    type:String,
    required: true
},
passwordHash:{
    type:String,
    required: true
},
photo:{
    type:String,
    required: true
}

});

const UserManagement = mongoose.model("User Management",UserManagementSchema);
module.exports=UserManagement;