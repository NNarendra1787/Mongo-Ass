const EmployeeDetail = require("../Project/projectStr")

//Query the collection Adding single data in doucument at a time
const addOneData = async (req, res)=>{
    const data = req.body;
    const result = await EmployeeDetail.insertOne(data);
    res.send({msg: "Successfullty Add single Data", result: result})
}

// Query the collection and add many document at a time

const addManyData = async (req, res)=>{
    const data = req.body;
    const result = await EmployeeDetail.insertMany(data);
    res.send({msg: "Successfuly added many data", result: result})
}

// const insertUserDetails = async(req, res)=>{
//     const {firstName, lastName, salary, department,lastCompany,lastSalary,overallExp,contactInfo,yearGrad,gradStream} = req.body;
//     const UserFind = await student.findOne({Email: Email})

//     if(UserFind){
//         return res.send({msg: "User alrady in use"})
//     }

//     const tempObj = await student({
//         firstNameName: firstName,
//         lastName : lastName,
//         salary : salary,
//         department : department,
//         lastCompany : lastCompany,
//         lastSalary : lastSalary,
//         overallExp: overallExp,
//         contactInfo : contactInfo,
//         yearGrad : yearGrad,
//         gradStream : gradStream,
        
//     })

//     const result = await tempObj.save();

//     return res.send({msg: "user data has been stored", result: result})
// }

// Finding the list of document
const fetchData = async (req, res)=>{
    const result = await EmployeeDetail.find();
    return res.send({msg: "user data has been stored", result: result})
}

// Cheking with the salary range

const FindingRange = async (req, res)=>{
    const data = await EmployeeDetail.find({"salary": {'$gte': '25000', '$lte': '60000'}})
    res.send(data)
}

// Checking the range of experieance
const FindingExp = async (req, res)=>{
    const data = await EmployeeDetail.find({'overallExp': {'$gte' : '2'}})
    res.send(data)
}

// Checking graduate after 2015 and having more than 1 year exp

const GradExp = async (req, res)=>{
    const data = await EmployeeDetail.find({'yearGrad': {'$gte': '2015'}, 'overallExp' : {'$gt': '1'}})
    res.send(data)
}

//Upadate single data

const SingleUpdate = async (req, res)=>{
    const data = await EmployeeDetail.updateOne({'salary': {'$gte': '70000'}},{'$set' : {'salary': '65000'}})
    res.send(data)
}
const ManyUpdate = async (req, res)=>{
    const data = await EmployeeDetail.updateMany({ salary: { $gte: 30000, $lte: 40000 } },
        { $set: { salary: 45000 } })
    res.send(data)
}


const deleteOneData = async (req, res) => {
    const data = await EmployeeDetail.deleteOne({ lastCompany: "X" });
    res.send(data);
  };
  
  //Delete all the documents from ""employee"" where last company is Y"
const deleteManyData = async (req, res) => {
    const data = await  EmployeeDetail.deleteMany({ lastCompany: "X" });
    res.send(data);
};
  
module.exports = {
    addOneData,
    addManyData,
    fetchData,
    FindingRange,
    FindingExp,
    GradExp,
    SingleUpdate,
    ManyUpdate,
    deleteOneData,
    deleteManyData,
}