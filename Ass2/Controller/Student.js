const {database} = require("../Config/db")
const student_collection = database.collection("employee");

// const arr = []


//for inserting the data is the query we were writting in the shall

// db.collectionName.insertOne({})
const addData = async(req, res)=>{
    const data = req.body;
    const result = await student_collection.insertOne(data)
    // arr.push(data)
    res.send({msg: "successfully added", data: result})

}
const addMultipleData = async(req, res)=>{
    const data = req.body;
    const result = await student_collection.insertMany(data)
    // arr.push(data)
    res.send({msg: "successfully added", data: result})

}

// To find Data
const fetchData = async (req, res)=>{
    const data = await student_collection.find().toArray();
    res.send(data)
}

// To Check the ragne
const rangeData = async (req, res)=>{
    const data = await student_collection.find({"salary": {'$gte': '30000'}}).toArray();
    res.send(data)
}
// Compair the range
const ExperianceData = async (req, res)=>{
    const data = await student_collection.find({"overallExp": {'$gte': '2'}}).toArray();
    // const data = await student_collection.find({"name": {'$gt': 9000, '$lte': 50000}}).toArray();
    res.send(data)
}

const rangeDataCheck = async (req, res)=>{
    const data = await student_collection.find({"overallExp": {'$gt': '1'}, "yearGrad": {'$gte': '2015'}}).toArray();
    res.send(data)
}

const updateSalary = async (req, res)=>{
    const data = await student_collection.updateOne({"salary": {'$gte' : "30000"}}, {'$set': {"salary": "65000" }})
    res.send(data)
}

const deletePer = async(req, res)=>{
    const data = await student_collection.deleteMany({"lastCompany": "Y"})
    res.send(data)
}



module.exports = {
    addData,
    addMultipleData,
    fetchData,
    rangeData,
    ExperianceData,
    rangeDataCheck,
    updateSalary,
    deletePer,
}
