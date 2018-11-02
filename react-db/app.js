/**
 * Created by mjc on 2018/10/31.
 */
const express=require('express');
const db=require('./db');
const router=require('./routers');
const app =express();

(async()=>{
  await db;
  app.use(router);
})()
app.listen(4000, err=> {
  if(!err){
    console.log('启动了')
  }else{

    console.log(err)
  }
})