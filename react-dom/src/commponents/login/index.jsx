/**
 * Created by mjc on 2018/10/31.
 */
import React,{Component} from 'react';
import {NavBar,List,InputItem,Button,WingBlank,WhiteSpace} from 'antd-mobile';
import Logo from '../logo';
import {reqLogin} from '../../api';

class Register extends Component{
  state={
    username:'',
    password:''
  }

  handleChange=(name,val)=>{
    this.setState({
      [name]:val
    })
  }
  login=async()=>{
    const {username,password}=this.state;
    const data=await  reqLogin({username,password});
    console.log(data);
  }

  goRegister=()=>{
    this.props.history.replace('/register');
  }
  render(){
    return(
      <div>
        <NavBar>硅 谷 直 聘</NavBar>
        <Logo />
        <WingBlank>
          <form>
            <List>
              <WhiteSpace />
              <InputItem placeholder="请输入用户名" onChange={val => this.handleChange('username', val)}>用户名：</InputItem>
              <WhiteSpace />
              <InputItem
                placeholder="请输入密码"
                type="password"
                onChange={val => this.handleChange('password', val)}
              >密码：</InputItem>
              <WhiteSpace />
              <InputItem
                placeholder="请输入确认密码"
                type="password"
                onChange={val => this.handleChange('rePassword', val)}>确认密码：</InputItem>
              <WhiteSpace />
              <WhiteSpace />
              <Button type="primary" onClick={this.login}>登 录</Button>
              <WhiteSpace />
              <Button type="primary" onClick={this.goRegister}>还 没 有 账户</Button>
            </List>
          </form>
        </WingBlank>
      </div>
    )
  }
}
export default Register;