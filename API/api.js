const express=require('express');
const router=express.Router();

const auth=require('../routes/auth');
router.use("/auth",auth);

const usermanagement=require('../routes/UserManagement/usermanagement');
router.use("/usermanagement",usermanagement);

module.exports = router;