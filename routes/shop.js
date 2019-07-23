const shopCon=require('../controllers/shop');
const express=require('express');
const router=express.Router();
router.get('/',shopCon.getIndex);
router.get('/products',shopCon.getPro);
router.get('/cart',shopCon.getCart);
router.get('/checkout',shopCon.getCheckout);
module.exports=router;