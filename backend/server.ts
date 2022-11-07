
import express from "express";
import MainRoute from "./src/Routes/Router";
require('dotenv').config()

const app = express();


app.use('/',MainRoute)

app.listen(process.env.PORT, ()=>{
    console.log(`Express is running on http://localhost:${process.env.PORT}/`)
})