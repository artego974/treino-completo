import { Request, Response } from "express";
import { AuthService } from "../services/AuthService";
import { generateToken } from "../utils/jwt";

const service = new AuthService()
export class AuthController{
    async register(req:Request,res:Response){
        try{
            const data = req.body
            const user = await service.register(data)
            const safe = {...user}
            delete(safe as any).password
            return res.status(201).json(safe)
        }catch(e:any){
            return res.status(400).json({message: e.message})
        }
    }
    async login(req:Request, res:Response){
        try{
            const {email, password} = req.body
            const user = await service.login(email,password)
            const token = generateToken({id:user.id, role:user.role, email:user.email})
            const safe = {...user}
            delete(safe as any).password
            return res.status(200).json({user:safe,token})
        }catch(e:any){
            return res.status(400).json({message:e.message})
        }
    }
}