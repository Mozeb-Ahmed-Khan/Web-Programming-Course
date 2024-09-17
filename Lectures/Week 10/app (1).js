 const express=require("express");

 const app=express();

 const port=80;
 //Middleware function: to get static files for display and user access
 app.use('/stat', express.static('static'));

//these are just route for your app end points
 app.get("/", (req, res)=>
 res.send("this is first express app get route to access home.")
 );
 app.get("/about", (req, res)=>
 res.send("this is first express app get route to access About.")
 );

 app.post("/about", (req, res)=>
 res.status(200).send("this is first express app  post route to access About.")
 );
 app.listen(port, ()=>
 console.log("App listening at port 80. "));