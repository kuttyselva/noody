const Product = require("../models/product");
const Cart = require("../models/cart");

exports.getPro = (req, res, next) => {
  Product.findAll().then(products => {
    res.render("shop/pro-list", { pro: products, pagetitle: "All Products", path: "/products" });
  }).catch(err => console.log(err));
};
exports.getIndex = (req, res) => {
  Product.findAll().then(products => {
    res.render("shop/index", { pro: products, pagetitle: "myshop", path: "/" });
  }).catch(err => console.log(err));

};
exports.getCart = (req, res) => {
  Cart.getCart(cart => {
    Product.fetchAll(products => {
      const cartPro = [];
      for (product of products) {
        const CartProData = cart.products.find(prod => prod.id === product.id);
        if (CartProData) {
          cartPro.push({ productData: product, qty: CartProData.qty });
        }
      }
      return res.render("shop/cart", { pro: cartPro, path: "/cart", pagetitle: "Your cart" });
    });
  });
};
exports.postCart = (req, res) => {
  const proid = req.body.proid;
  Product.findbyId(proid, product => {
    Cart.AddProduct(proid, product.price);
  });
  return res.redirect('/');
};
exports.getOrders = (req, res) => {
  res.render("shop/orders", { path: "/orders", pagetitle: "Your Orders" });
};
exports.getCheckout = (req, res) => {
  res.render("shop/checkout", {
    path: "/checkout",
    pagetitle: "Checkout area"
  });
};
exports.getProd = (req, res, next) => {
  const proid = req.params.id;
  Product.findByPk(proid).then((product) => {
    res.render("shop/pro-detail", { pro: product })
  }).catch(err => console.log(err));
};
exports.postCartDel = (req, res, next) => {
  const proid = req.body.proid;
  Product.findbyId(proid, prod => {
    Cart.deleteProduct(proid, prod.price);
    return res.redirect('/cart');
  });
}
