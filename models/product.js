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
    constructor(t) {
        this.title = t;
    }
    save() {
        getProfrmFile(products=>{
            products.push(this);
            fs.writeFile(p, JSON.stringify(products), (err) => { console.log(err) });

        })
    }
    static fetchAll(cb) {
        getProfrmFile(cb);
    }
}