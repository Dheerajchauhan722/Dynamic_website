// we cannot use this in fat arrow function ()=>{}
// here this is working as registerEmployee which is in app.js
const mongoose=require("mongoose");
const validator =require("validator");
const employeeSchema=new mongoose.Schema({
    fullname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        validator(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid email id");
            }
        }
    },

    phone:{
        type:String,
        required:true,
        min:1000000000,
        max:9999999999

    },
    message:{
        type:String,
        require:true
        
    },
    data:{
        type:Date,
        default:Date.now
    }

})


//now we need o create the collection
const  Register=new mongoose.model("Dynamic_website_data",employeeSchema);// collection name will be Contact_Data
module.exports=Register;

