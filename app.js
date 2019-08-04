const express = require('express');
const bodyparser = require('body-parser');
const path = require('path');
const seq = require('./util/database');
const app = express();
app.set('view engine', 'pug');
// app.set('view engine','ejs');
app.set('views', 'views');
const adminRoutes = require('./routes/admin');
const shopRoute = require('./routes/shop');

const errCon = require('./controllers/error');
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyparser.urlencoded({
    extended: false
}));
app.use('/admin', adminRoutes);
app.use(shopRoute);

app.use(errCon.notFound);
seq.sync().then(res => {
    // console.log(res);
    app.listen(3000);
}).
    catch(err => console.log(err));
