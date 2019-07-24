const Product = require("../models/product");
const alert = require("alert-node");
exports.getAddPro = (req, res, next) => {
  res.render("admin/add", { pagetitle: "Add products", path: "/admin/add" });
};
exports.addNewPro = (req, res) => {
  const title = req.body.title;
  const imageurl = req.body.imageurl;
  const desc = req.body.desc;
  const price = req.body.price;
  const product = new Product(title, imageurl, desc, price);
  product.save();
  res.render("admin/add");
};
exports.getProduct = (req, res) => {
  Product.fetchAll(products => {
    res.render("admin/ad-pro-list", {
      pro: products,
      pagetitle: "Admin Products",
      path: "/admin/pro"
    });
  });
};
