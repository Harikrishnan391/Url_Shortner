import express from 'express'
import urlRouter from '../backend/router/url.js'
import  connectDb  from '../backend/connect.js'
import cors from 'cors'


const app  = express()
const port = 8001
connectDb('mongodb+srv://albertsebastian2525:PmexUjlxLFYwM0HE@cluster0.nxpesyb.mongodb.net/short_url?retryWrites=true&w=majority')

app.use(cors());
  app.use(express.json());

  app.use('/',urlRouter)

app.listen(port,()=>console.log("Server Started at",port))