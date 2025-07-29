import { NextFunction, Request, Response } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import { JWT_SECRET } from "./config";



export function middleware(req:Request , res:Response , next:NextFunction){
    const token = req.headers["authorization"]??"";
    const decoded = jwt.verify(token , JWT_SECRET);
    if(decoded){
        (req as JwtPayload).userId = (decoded as JwtPayload).userId;
        next();

    }else{
        res.status(403).json({msg:"Unauthorized access"});
    }

}