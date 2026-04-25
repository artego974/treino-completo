import jwt from "jsonwebtoken"
import * as dotenv from "dotenv"

dotenv.config()

export const generateToken = (payload:object)=>{
    return jwt.sign(payload, String(process.env.JWT_SECRET), {
      expiresIn: Number(process.env.JWT_EXPIRE),
    });
}

export const validToken = (token:string)=>{
    return jwt.verify(token, String(process.env.JWT_SECRET));
}