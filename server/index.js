const express =require("express")
const app=express()
const port=4028
const bodyParser=require("body-parser")
const cors=require("cors")
const db=require("./DBConnection")
const jwt=require("jsonwebtoken")

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use( express.static(`${__dirname}/upload`));

const route=require('./Routes/route')
app.use('/shopunity_api',route)

app.listen(port,()=>{
    console.log(
    `${port} port is created`
    );
})