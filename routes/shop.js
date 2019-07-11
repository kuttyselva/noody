const proCon=require('../controllers/products');
const express=require('express');
const router=express.Router();
router.get('/',proCon.getPro);

module.exports=router;