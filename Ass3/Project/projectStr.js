const mongoose  = require('mongoose');

const Employee_Rec = mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    salary: {
        type: String,
        required: true
    },
    department: {
        type: String,
        required: true
    },
    lastCompany: {
        type: String,
        required: true
    },
    lastSalary: {
        type: String,
        required: true
    },
    overallExp: {
        type: String,
        required: true
    },
    contactInfo: {
        type: String,
        required: true
    },
    yearGrad: {
        type: String,
        required: true
    },
    gradStream: {
        type: String,
        required: true
    },

})


// Create a collection inside the named "Employee"
const EmployeeDetail = mongoose.model("employee", Employee_Rec)

module.exports = EmployeeDetail;