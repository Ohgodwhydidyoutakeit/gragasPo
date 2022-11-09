
import express from "express";
import MainRoute from "./src/Routes/Router";
import cors from 'cors'
require('dotenv').config()

const app = express();
app.use(cors())

app.use('/',MainRoute)

app.listen(process.env.PORT, ()=>{
    console.log(`Express is running on http://localhost:${process.env.PORT}/`)
})