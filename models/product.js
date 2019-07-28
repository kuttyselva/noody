const products = [];
const fs = require("fs");
const path = require("path");
const cart =require('./cart');
const p = path.join(
  path.dirname(process.mainModule.filename),
  "data",
  "products.json"
);
const getProfrmFile = cb => {
  fs.readFile(p, (err, fileCont) => {
    if (err) {
      return cb([]);
    }
    cb(JSON.parse(fileCont));
  });
};
module.exports = class Product {
  constructor(id, title, imageurl, desc, price) {
    this.id = id;
    this.title = title;
    this.imageurl = imageurl;
    this.desc = desc;
    this.price = price;
  }
  save() {
    getProfrmFile(products => {
      if (this.id) {
          const existproid=products.findIndex(prod=>prod.id===this.id);
          const updated=[...products];
          updated[existproid]=this;
          fs.writeFile(p, JSON.stringify(updated), err => {
            console.log(err);
          });
      }
      else{
        this.id = Math.random().toString();
        products.push(this);
        fs.writeFile(p, JSON.stringify(products), err => {
          console.log(err);
        });
      }
      
    });
  }
  static deletebyId(id){
    getProfrmFile(products => {
        const pro=products.find(prod=>prod.id===id);
        const updated = products.filter(p => p.id !== id);
        fs.writeFile(p,JSON.stringify(updated),err=>{
            if(!err){
                cart.deleteProduct(id,pro.price);
            }
        });
      });
  }
  static fetchAll(cb) {
    getProfrmFile(cb);
  }
  static findbyId(id, cb) {
    getProfrmFile(products => {
      const prod = products.find(p => p.id === id);
      cb(prod);
    });
  }
};
