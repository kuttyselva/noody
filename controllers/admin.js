const Product = require("../models/product");
const alert = require("alert-node");
exports.getAddPro = (req, res, next) => {
  res.render("admin/edit-pro", {
    pagetitle: "Add products",
    path: "/admin/add",
    editing:false
  });
};
exports.addNewPro = (req, res) => {
  const title = req.body.title;
  const imageurl = req.body.imageurl;
  const desc = req.body.desc;
  const price = req.body.price;
  const product = new Product(null,title, imageurl, desc, price);
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
exports.getEditProduct = (req, res, next) => {
  const Editmode = req.query.editing;
  if (!Editmode) {
    res.redirect("/");
  }
  const proid=req.params.id;
  Product.findbyId(proid,product=>{
    if(!product){
      return res.redirect("/");
    }
    res.render("admin/edit-pro", {
      pagetitle: "Edit products",
      path: "/admin/add",
      editing: Editmode,
      pro:product
    });
  });
  
};
exports.postEditPro=(req,res)=>{
  const id = req.body.proid;
  const title = req.body.title;
  const imageurl = req.body.imageurl;
  const desc = req.body.desc;
  const price = req.body.price;
  const product = new Product(id,title, imageurl, desc, price);
  product.save();
  res.redirect("/admin/pro");
};
exports.postDeletePro=(req,res)=>{
  const id=req.body.proid;
  Product.deletebyId(id);
  res.redirect('pro');
}
