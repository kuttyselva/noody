const Seq=require('sequelize');
const seq=new Seq('node_complete','root','',{dialect:'mysql',host:'localhost'});
module.exports=seq;