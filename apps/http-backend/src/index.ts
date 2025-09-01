import express, { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { middleware } from "./middleware";
const {CreateUserSchema , SigninSchema , CreateRoomSchema} = require("@repo/common/types");
const JWT_SECRET  =require("@repo/backend-common/config");
const app = express();

app.post("/signup" , (req:Request , res:Response)=>{
    const data = CreateUserSchema.safeParse(req.body);
    if(!data.success){
        res.status(500).json({message:"incorrect input"});
        return ;
    }
    try{
        


    }
    catch(err){
        res.status(500).json({message:"error in signin"})
    }
    
})

app.post("/signin" , (req:Request , res:Response)=>{

    const userId = 1;
    const token = jwt.sign({
        userId 
    } , JWT_SECRET);


})
app.post("/room" , middleware,(req:Request , res:Response)=>{
    res.json({
        roomId:123
    })
})
app.listen(8000 , ()=>{
    console.log("connected to http-backend");
});