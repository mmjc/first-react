/**
 * Created by mjc on 2018/10/31.
 */
   const mongoose=require('mongoose');

   module.exports=new Promise((resolve,reject)=>{
     mongoose.connect('mongodb://localhost:27017/pinz001',{useNewUrlParser:true});
     mongoose.connection.once('open',err=>{
       if(!err){
         console.log('数据连接成功了')
         resolve();
       }else{
         console.log(err)
         reject();
       }
     })
   })