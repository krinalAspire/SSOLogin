require('dotenv').config();
const express=require("express");
const app=express();
const passport=require("passport");
// const cookieSession=require("cookie-session");

require("./passport-setup");

app.use(passport.initialize());
app.use(require('express-session')({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));

app.use(passport.session());

// app.use(cookieSession({
//     name:'tuto-session',
//     keys:['key1','key2']
// }))

const port=process.env.PORT;

app.set("view engine","ejs")

app.get("/",(req,res)=>{
    res.render("pages/index");
})

app.get('/success',(req,res)=>{
    res.render('pages/profile');
    
})

app.get('/google',passport.authenticate("google",{scope:["profile","email"]}));

app.get("/google/callback",passport.authenticate("google",{failureRedirect:"/failed"}),
function(req,res){
    res.redirect('/success')
})

app.listen(port, ()=>{
    console.log(`server running at ${port}`);
})