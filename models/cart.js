const  fs=require('fs');
const path = require('path');
const p = path.join(path.dirname(process.mainModule.filename), 'data', 'cart.json');
module.exports =class Cart{
    static AddProduct(id,proPrice){
        fs.readFile(p,(err,fileContent)=>{
            let cart={products:[],totalPrice:0};
            if(!err){
                cart=JSON.parse(fileContent);
            }
            const existProdInd=cart.products.findIndex(prod=> prod.id===id);
            const existProd=cart.products[existProdInd];
            let updatedPro;
            if(existProd){
                updatedPro={...existProd};
                updatedPro.qty=updatedPro.qty+1;
                cart.products=[...cart.products];
                cart.products[existProdInd]=updatedPro;
            }
            else{
                updatedPro={id:id,qty:1};
                cart.products=[...cart.products,updatedPro];
            }
            cart.totalPrice=cart.totalPrice+ +proPrice;
            fs.writeFile(p,JSON.stringify(cart),err=>{console.log(err)});
        });
    }
    static deleteProduct(id,price){
        fs.readFile(p,(err,fileContent)=>{
            if(err){
                return;
            }
            const updatedCart={...JSON.parse(fileContent)};
            const product=updatedCart.products.find(prod=>prod.id===id);
            const proqty=product.qty;
            updatedCart.products=updatedCart.products.filter(prod=>prod.id!==id);
            updatedCart.totalPrice=updatedCart.totalPrice-price*proqty;
            fs.writeFile(p,JSON.stringify(updatedCart),err=>{console.log(err)});
        });
    }

}