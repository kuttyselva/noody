const Product = require("../models/product");

exports.getPro = (req, res, next) => {
  Product.fetchAll(products => {
    res.render("shop/pro-list", {
      pro: products,
      pagetitle: "All Products",
      path: "/products"
    });
  });
  // console.log(products);
};
exports.getIndex = (req, res) => {
  Product.fetchAll(products => {
    res.render("shop/index", { pro: products, pagetitle: "myshop", path: "/" });
  });
};
exports.getCart = (req, res) => {
  res.render("shop/cart", { path: "/cart", pagetitle: "Your cart" });
};
exports.getCheckout=(req,res)=>{
    res.render("shop/checkout",{path:'/checkout',pagetitle:'Checkout area'});
};
