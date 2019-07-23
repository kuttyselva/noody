const Product = require('../models/product');
exports.getAddPro = (req, res, next) => {
    res.render('admin/add', { pagetitle: 'Add products', path: '/admin/add' });
};
exports.addNewPro = (req, res, next) => {
    // console.log(req.body);
    const product = new Product(req.body.title);
    product.save();
    res.redirect('/');
};
exports.getProduct=(req,res)=>{
    Product.fetchAll(products => {
        res.render("admin/ad-pro-list", {
          pro: products,
          pagetitle: "Admin Products",
          path: "/admin/pro"
        });
      });
}