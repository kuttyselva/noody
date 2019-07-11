const Product = require('../models/product');
exports.getAddPro = (req, res, next) => {
    res.render('add', { pagetitle: 'Add products', path: '/admin/add' });
};
exports.addNewPro = (req, res, next) => {
    // console.log(req.body);
    const product = new Product(req.body.title);
    product.save();
    res.redirect('/');
};
exports.getPro = (req, res, next) => {
    Product.fetchAll(products=>{
        res.render('shop', { pro: products, pagetitle: 'myshop', path: '/' });

    });
        // console.log(products);
};
