const express = require("express");
const router = require("./Router/route");
const connection = require("./Config/mongo")

const app = express();

app.use(express.json())

app.use('/api', router)

app.get("/", (req, res)=>{
    res.send({msg: "This is a testing phase!"})
})
app.listen(8000, async ()=>{
    try{
        await connection()
        console.log("Server is running on port 8000");
    }
    catch(err){
        console.log(err, "sum error occures ");
    }
})