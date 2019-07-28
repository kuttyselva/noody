const express=require('express');
const router=express.Router();
const adCon=require('../controllers/admin');
router.get('/add',adCon.getAddPro);
router.post('/add',adCon.addNewPro);
router.get('/pro',adCon.getProduct);
router.get('/edit/:id',adCon.getEditProduct);
router.post('/edit',adCon.postEditPro);
router.post('/delete',adCon.postDeletePro);

module.exports=router;
