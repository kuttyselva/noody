const express = require('express');
const bodyparser = require('body-parser');
const path=require('path');
const app = express();


app.set('view engine','pug');
// app.set('view engine','ejs');
app.set('views','views');
const adminRoutes = require('./routes/admin');
const shopRoute = require('./routes/shop');
const proCon=require('./controllers/products');
app.use(express.static(path.join(__dirname,'public')));
app.use(bodyparser.urlencoded({
    extended: false
}));
app.use('/admin',adminRoutes);
app.use(shopRoute);

app.use(proCon.notFound);

app.listen(3000);