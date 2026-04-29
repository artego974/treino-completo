
import { AppDataSource } from "../config/data-source";
import { User } from "../models/User";
import bcrypt from "bcrypt"


export class AuthService{
    private repo = AppDataSource.getRepository(User)
    async register(data:any){
        const exist = await this.repo.findOneBy({email: data.email})
        if(exist) throw new Error("User já existe")
        const hash = await bcrypt.hash(data.password, 10)
        const user =  this.repo.create({...data, password:hash})
        return this.repo.save(user)
        
    }
    async login(email:string, password:string){
        const user = await this.repo.findOneBy({email})
        if(!user) throw new Error("User não encontrado")
        const valid = await bcrypt.compare(password,user.password)
        if(!valid) throw new Error("Senha incorreta ou invalida")
        return user
    }


}