const { addData, addMultipleData, fetchData, rangeData, ExperianceData, rangeDataCheck, updateSalary, deletePer } = require('../Controller/Student');

const router = require('express').Router();

router.post("/addData", addData );
router.post("/addMultiData", addMultipleData );

router.get("/fetchData", fetchData);
router.get("/rangeData", rangeData);
router.get("/expData", ExperianceData);
router.get("/ranDataChe", rangeDataCheck);


router.put("/update", updateSalary);
router.delete("/del", deletePer);




module.exports = router;