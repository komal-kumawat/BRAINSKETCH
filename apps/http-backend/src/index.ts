import express, { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "./config";
import { middleware } from "./middleware";
import bcrypt from "bcrypt";
const app = express()
const port = 3001;
app.use(express.json());

app.post("/signup" , async (req:Request , res:Response)=>{

    const { username, password } = req.body;

    
  if (!username || !password) {
    return res.status(400).json({ error: "Username and password are required" });
  }

  const existingUser = users.find((u) => u.username === username);
  if (existingUser) {
    return res.status(400).json({ error: "User already exists" });
  }

  const passwordHash = await bcrypt.hash(password, 10);

  const newUser: User = {
    id: userIdCounter++,
    username,
    passwordHash,
  };

    //db call -> use postgres :)
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
