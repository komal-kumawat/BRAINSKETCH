import express, { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "./config";
import { middleware } from "./middleware";
const app = express()
const port = 3001;
app.post("/signup" , (req:Request , res:Response)=>{
    //db call
    res.json("signup page")
})
app.post("/signin" , (req:Request,res:Response)=>{
    const userId = 1;
    const token = jwt.sign({userId} , JWT_SECRET);
    res.json(token);
})
app.post("/room",middleware , (req:Request,res:Response)=>{
    // db call
    res.json({roomId:123});
})
app.listen(port , ()=>{
    console.log(`App is listening to port ${port}`)
})