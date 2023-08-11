const express = require("express");
const router = require("./Router/route");

const app = express();

app.use(express.json())

app.use('/api', router)

app.get("/", (req, res)=>{
    res.send({msg: "This is a testing phase!"})
})
app.listen(5000,()=>{
    console.log("Server is running on port 5000");
})