const products=[];

exports.getAddPro =(req, res, next) => {
    res.render('add',{pagetitle:'Add products',path:'/admin/add'});   
};
exports.addNewPro =(req, res, next) => {
    // console.log(req.body);
    products.push({title:req.body.title});
    res.redirect('/');
};
exports.getPro = (req, res, next) => {
    
    // console.log(products);
    res.render('shop',{pro:products,pagetitle:'myshop',path:'/'});
};
exports.notFound=(req,res)=>{
    res.status(404).render('404',{pagetitle:'not found'});
};