const { DeletData, fetchData, addOneData, addManyData, FindingRange, FindingExp, GradExp, SingleUpdate, ManyUpdate, deleteOneData, deleteManyData } = require('../Controller/Student');

const router = require('express').Router();

router.post("/addOneData", addOneData)
router.post("/addManyData", addManyData)
router.get("/check", fetchData)
router.get('/salaryData', FindingRange)
router.get('/ExpData', FindingExp)
router.get('/gradData', GradExp)
router.get('singUp', SingleUpdate);
router.get('manyUp', ManyUpdate);
router.get('manyUp', deleteOneData);
router.get('manyUp', deleteManyData);

module.exports = router