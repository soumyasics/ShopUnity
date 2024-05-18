const express =require("express")
const app=express()
const port=8002
const bodyparser=require("body-parser")
const cors=require("cors")
const db=require("./DBConnection")
const jwt=require("jsonwebtoken")

app.use(cors())
app.use(bodyparser.json())

app.use(express.static(`${__dirname}/upload`));

const route=require('./Routes/route')
app.use('/',route)

app.listen(port,()=>{
    console.log(
    `${port} port is created`
    );
})