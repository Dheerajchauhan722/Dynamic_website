const mongoose=require("mongoose");

mongoose.connect('mongodb+srv://Dheeraj123:Dheeraj123@dynamicwebsite1.me5ea.mongodb.net/test?authSource=admin&replicaSet=atlas-b6uwhp-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true',
{
     useNewUrlParser: true,  // to avoid deprication warnings
     useUnifiedTopology: true ,
     useCreateIndex:true,
     useFindAndModify:false
}).then(()=>console.log("connection successfull....")).catch((err)=>console.log("No connection"));
    