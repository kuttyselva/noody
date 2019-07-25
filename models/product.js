const products = [];
const fs = require('fs');
const path = require('path');
const p = path.join(path.dirname(process.mainModule.filename), 'data', 'products.json');
const getProfrmFile = cb => {
    fs.readFile(p, (err, fileCont) => {
        if (err) {
           return cb([]);
        }
        cb(JSON.parse(fileCont));
    });

}
module.exports = class Product {
    constructor(title,imageurl,desc,price) {
        this.title = title;
        this.imageurl=imageurl;
        this.desc=desc;
        this.price=price;
    }
    save() {
        this.id=Math.random().toString();
        getProfrmFile(products=>{
            products.push(this);
            fs.writeFile(p, JSON.stringify(products), (err) => { console.log(err) });

        })
    }
    static fetchAll(cb) {
        getProfrmFile(cb);
    }
    static findbyId(id,cb){
        getProfrmFile(products=>{
            const prod=products.find(p=> p.id===id);
            cb(prod);
        })
    }
}