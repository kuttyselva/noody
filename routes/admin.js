const express=require('express');
const router=express.Router();
const proCon=require('../controllers/products');
router.get('/add',proCon.getAddPro);
router.post('/add',proCon.addNewPro);
module.exports=router;
