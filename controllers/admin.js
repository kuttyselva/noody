const Product = require("../models/product");
exports.getAddPro = (req, res, next) => {
  res.render("admin/edit-pro", {
    pagetitle: "Add products",
    path: "/admin/add",
    editing: false
  });
};
exports.addNewPro = (req, res) => {
  const title = req.body.title;
  const imgurl = req.body.imgurl;
  const desc = req.body.desc;
  const price = req.body.price;
  Product.create({ title: title, imgurl: imgurl, price: price, description: desc })
    .then(res => console.log(res))
    .catch(err => console.log(err));

};
exports.getProduct = (req, res) => {
  Product.findAll().then(products => {
    res.render("admin/ad-pro-list", {
      pro: products,
      pagetitle: "Admin Products",
      path: "/admin/pro"
    });
  }).catch(err => console.log(err));
};
exports.getEditProduct = (req, res, next) => {
  const Editmode = req.query.editing;
  if (!Editmode) {
    return res.redirect("/");
  }
  const proid = req.params.id;
  Product.findByPk(proid).then(product => {
    if (!product) {
      return res.redirect("/");
    }
    return res.render("admin/edit-pro", {
      pagetitle: "Edit products",
      path: "/admin/add",
      editing: Editmode,
      pro: product
    });
  }).catch(err=>console.log(err));
};
exports.postEditPro = (req, res) => {
  const id = req.body.proid;
  const title = req.body.title;
  const imageurl = req.body.imageurl;
  const desc = req.body.desc;
  const price = req.body.price;
  const product = new Product(id, title, imageurl, desc, price);
  product.save();
  return res.redirect("/admin/pro");
};
exports.postDeletePro = (req, res) => {
  const id = req.body.proid;
  Product.deletebyId(id);
  return res.redirect('pro');
}
