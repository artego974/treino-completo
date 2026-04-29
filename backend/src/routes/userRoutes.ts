import { Router } from "express";
import { AuthController } from "../controllers/AuthService";


const route = Router()
const controller = new AuthController()

route.post("/register", controller.register.bind(controller))
route.post("/login", controller.login.bind(controller))

export default route