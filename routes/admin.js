const express=require('express');
const router=express.Router();
const adCon=require('../controllers/admin');
router.get('/add',adCon.getAddPro);
router.post('/add',adCon.addNewPro);
router.get('/pro',adCon.getProduct);
module.exports=router;
