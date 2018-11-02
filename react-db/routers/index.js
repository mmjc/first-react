/**
 * Created by mjc on 2018/10/31.
 */
const express=require('express');
const md5=require('blueimp-md5');
const Users=require('../mondles/users');

const Router=express.Router;
const router=new Router();
router.use(express.urlencoded({extend:true}));


// router.use(express.urlencoded({extended:true}));
// 登录
router.post('/login',async(req,res)=>{
  const {username,password}=req.body;
  console.log(username,password)
  if(!username||!password){
    res.json({
      "code":2,
      "msg":"用户输入错误"
    });
    return;
  }
  try{
    const data=await Users.findOne({username,password:md5(password)});
    if(data){
      res.json({
        "code":0,
        "data":{
          "_id":data.id,
          "username":data.username,
          "type":data.type
        }
      })
    }else{
      res.json({
          "code":1,
          "msg":"用户名或密码错误"
        })
    }
  }catch (e){
    res.json({
      "code":3,
      "msg":"网络不稳定，请重新链接 亲··"
    })
  }
})

//注册
router.post('/register',async(req,res)=>{
// console.log(username,password,type);
  const {username,password,type}=req.body;

  if(!username || !password || !type){
    res.json({
      "code":2,
      "msg":"用户输入不和法"
    });
    return;
  }

  try{
    const data=await Users.findOne({username});
    if(data){
      res.json({
        "code":1,
        "msg":"用户已存在"
      });
    }else{
      const data=await Users.create({username,password:md5(password),type});
      res.json({
        code:0,
        data:{
          _id:data.id,
          username:data.username,
          type:data.type
        }
      })
    }
  }catch (e){
    res.json({
      "code":3,
      "msg":"网络不稳定，请重新刷新"
    })
  }
})

module.exports=router;