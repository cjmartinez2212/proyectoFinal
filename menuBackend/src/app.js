import express from "express"
import morgan from "morgan"
import cors from "cors"

//conexion base de datos
import './database'

//rutas
import menuRoutes from './routes/menu.routes'


const app = express()
const port = 5000

app.use(express.json()) // para que express entienda formatos json por post y put
app.use(morgan('dev'))
app.use(cors())

app.use('/', menuRoutes)

app.listen(port, () => {
    console.log("Server app running in port", 5000)
})