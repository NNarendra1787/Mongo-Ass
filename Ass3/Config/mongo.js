const mongoose = require('mongoose'); //we have imported the mongoose
mongoose.set("strictQuery", true)

const url = "mongodb+srv://narendranarwade2002:Narendra2002@handson1.arheucz.mongodb.net/?retryWrites=true&w=majority"

const connection = async ()=>{
    try{
        const client = await mongoose.connect(url)
        console.log("server connected with database");
        return client
    }
    catch(err){
        console.log(err);
    }
}

module.exports = connection;