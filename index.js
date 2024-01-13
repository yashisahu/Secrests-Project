import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";
const__directname=direcrtname(fileURLToPath(import.meta.url));

const app= express();
const port=3000;

var userIsAuthorised = false;


app.use(bodyParser.urlencoded({ extended: true }));

function passwordCheck(req,res,next){
    const password = req.body["password"];
    if (password==="Fuck-off"){
        userIsAuthorised = true ;
    }
    next();
}

app.use(passwordCheck );

app.get("/",(req,res) =>{
    res.sendFile(__dirname + "/public/index.html");
});

app.post("/check" , (req,res) => {
    if(userIsAuthorised){
    res.sendFile(__dirname + "/public/secrect.html");
    }else{
        res.sendFile(__dirname + "/public/index.html");
    }
    });

    app.listen(port,() => {
        console.log(`Listen on port ${port}`);
    });















//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming