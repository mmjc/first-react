/**
 * Created by mjc on 2018/10/31.
 */

import axios from 'axios';
export default function ajax (url,data,type='GET'){
  let querystring='';

  if(data){
    Object.keys(data).forEach(key=>{
      const value=data[key];
      querystring+=key+'='+value+'&'
    })

    querystring=querystring.substring(0,querystring.length-1);

  }
  if(type.toUpperCase()==='GET'){
    url+='?'+querystring;
    return axios.get(url);
  }else{
    return axios.post(url,querystring,{
      headers:{
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    });
  }
}