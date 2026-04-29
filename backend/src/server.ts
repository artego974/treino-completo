import express from "express"
import cors from "cors"
import { AppDataSource } from "./config/data-source"
import routes from "./routes/index"

const app = express()
const port = 5173;

app.use(express.json())
app.use(cors({ origin: ["http://localhost:5173"] }));

AppDataSource.initialize().then(()=>{
    console.log("banco conectado")
    app.use(routes)
    app.listen(port, ()=>{
        console.log('server rodando na porta', port)
    })
})