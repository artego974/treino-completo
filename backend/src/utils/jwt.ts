import jwt from "jsonwebtoken"
import dotenv from "dotenv"

dotenv.config()

export const generateToken = (payload:object)=>{
    return jwt.sign(payload, process.env.JWT_SECRET, {
      expiresIn: Number(process.env.JWT_EXPIRE),
    });
}

export const validToken = (token:string)=>{
    return jwt.verify(token, process.env.JWT_SECRET);
}