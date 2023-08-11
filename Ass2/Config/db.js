const  {MongoClient} = require('mongodb')

const url = "mongodb://127.0.0.1:27017" //login host database

// const url2 = "mongodb+srv://narendranarwade2002:Narendra2002@handson1.arheucz.mongodb.net/?retryWrites=true&w=majority"

const mongoClient = new MongoClient(url)
try{
    mongoClient.connect();
    console.log("server connected with our database!");
}
catch(err){
console.log(err , "err in making the connection with DATABASE");
}

const database = mongoClient.db("HR_Data")
module.exports = {database}


//use database
//database>
//creating the collection