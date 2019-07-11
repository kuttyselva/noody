exports.notFound=(req,res)=>{
    res.status(404).render('404',{pagetitle:'not found'});
};