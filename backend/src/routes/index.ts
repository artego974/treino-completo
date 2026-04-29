import { Router } from "express";
import userRoute from "./userRoutes"

const routes = Router()

routes.use("/user", userRoute)

export default routes