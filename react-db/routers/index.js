/**
 * Created by mjc on 2018/10/31.
 */
const express=require('express');
const md5=require('blueimp-md5');
const Users=require('../mondles/users');

const Router=express.Router;
const router=new Router();
router.use(express.urlencoded({extend:true}));

router.post('./login',(req,res)=>{
  router.send('login路由响赢回来了');

  if(!username||!password||!type){
    res.json({
      "code":2,
      "msg":"用户输入不合法"
    });
    return;
  }
  Users.findOne({username},(err,data)=>{
    if(!err){
      if(data){
        res.json({
          "code":1,
          "msg":"此用户存在"
        });
      }else {
        Users.create({username, password: md5(password), type}, (err, data) => {
          if (!err) {
            res.json({
              "code": 0,
              data: {
                _id: data.id,
                username: data.username,
                type: data.type
              }
            })
          } else {
            res.json({
              "code": 3,
              "msg": "网络不稳定请重新出啊新"
            });
          }
        })
      }
    }else{
      res.json({
        "code":3,
        "msg":"网络不稳定请刷新"
      })
    }
  })
})

module.exports=router;