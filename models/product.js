const db=require('../util/database');
const path = require("path");

module.exports = class Product {
  constructor(id, title, imgurl, desc, price) {
    this.id = id;
    this.title = title;
    this.imgurl = imgurl;
    this.desc = desc;
    this.price = price;
  }
  save() {
   return db.execute('insert into products (title,price,imgurl,description) values(?,?,?,?)',[this.title,this.price,this.imgurl,this.desc]);
  }
  static deletebyId(){
    
  }
  static fetchAll() {
    return db.execute('SELECT * FROM products');
  }
  static findbyId(id) {
    return db.execute('select * from products where products.id = ?',[id]);
  }
   
};
