
import express from "express";
require('dotenv').config()

const app = express();


app.get('/', (req: express.Request, res: express.Response) => {
    res.status(200).send({
        message:"works"
    })
})

app.listen(process.env.PORT, ()=>{
    console.log(`Express is running on http://localhost:${process.env.PORT}/`)
})