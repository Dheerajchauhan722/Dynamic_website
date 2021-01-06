// Always use await in front of async functions if something returns promise you can check by console.log the retuen value

require('dotenv').config(); //  {path:"../.env"}   dotenv is used to encrypt your secrete key when tokening for user you need to give the proper path
const express=require("express");
const app=express();
const port=process.env.PORT || 7000; // process.env.PORT is used for global host
require("./db/conn");  // making connection with mongodb
const Register=require("./models/registers");

app.use(express.json());
app.use(express.urlencoded({extended:false}));  // to get form data to your post request in app.js file you must add this line

// if you want to render file.html inside public use below 3 lines at will also reder css,js files for sure
const path=require("path"); // modelule in nodejs to fetch paths
const public_static_path=path.join(__dirname,'../public'); // if website holds only html,css,js and bootstrap code then we can do it using public(static way)

//middleware
app.use(express.static(public_static_path)); // first get request to public folder index.html ( It is mostly used to set up middleware for your application ) if no index.html found then it goes to app get response

// to render desired page on desired get request from views
app.set('view engine','hbs'); //to render hbs files in views folder
const views_path=path.join(__dirname,'../templates/views');
app.set("views",views_path);

// to include some fixed file code anywhere we use these partials
const hbs=require('hbs');
const partial_path=path.join(__dirname,'../templates/partials');
hbs.registerPartials(partial_path);

console.log(process.env.DB_NAME);

app.get("/",async(req,res)=>{  
    res.render("index");  // this will render at localhost 7000
})

app.get("/home",async(req,res)=>{  // now auth middleware will be called first before function execution
    res.render("/index");  // this will render at localhost 7000
})

app.post("/register",async(req,res)=>{
    try{
            const registerEmployee=new Register({
                fullname:req.body.name,
                email:req.body.email,
                phone:req.body.phone,
                message:req.body.message
            });
            const Employee_registered=await registerEmployee.save();
            
            res.status(201).render("index");
        
    }catch(e){
        res.status(400).send(e);
    }
}) 

app.get("*",async(req,res)=>{
    res.render("404");
}) 


app.listen(port,()=>{
    console.log(`connection is setup at ${port}`); //template engine ``
})
























































































