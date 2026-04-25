import express from "express"
import cors from "cors"
import { AppDataSource } from "./config/data-source"

const app = express()
const port = 3000

app.use(express.json())
app.use(cors())

AppDataSource.initialize().then(()=>{
    console.log("banco conectado")
    app.listen(port, ()=>{
        console.log('server rodando na porta', port)
    })
})