// import libraries 
import express from 'express'

// import functions
import loginRoute from './routes/login.js' 
import { connectDB } from './utils/features.js'
import { errorMiddleware } from './middleware/error.js'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import dashboardRoute from './routes/dashboardRoute.js'

const port = 5173

// init app
const app = express()
app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))

// connect to DB
connectDB()

// use loginRoute
app.use('/', loginRoute)
app.use('/dashboard', dashboardRoute)

// error handling
app.use(errorMiddleware)

// listen to port
app.listen(port, ()=> {

    console.log(`server is working on port http://localhost:${port}`)

})