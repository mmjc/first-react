/**
 * Created by mjc on 2018/10/31.
 */
import React,{Component} from 'react';
import {NavBar,List,InputItem,Button,WingBlank,WhiteSpace,Radio} from 'antd-mobile';
import PropTypes from 'prop-types';
import {Redirect} from 'react-router-dom';
import Logo from '../logo/logo.png';

const Item=List.Item;
class Register extends Component{

  static propTypes={
    user:PropTypes.object.isRerquired,
    register:PropTypes.func.isRerquired
  }

  state={
    username:'',
    password:'',
    repassword:'',
    type:'laoban'
  }

  handleChange=(name,val)=>{
    this.setState({
      [name]:val
    })
  }
  register= async()=>{
    const {username,repassword,password,type}=this.state;
    // console.log(username,password,type);
    this.props.register({username,password,repassword,type});
    // if(password===rePassword){
    //   const data=await reqRegister({username,password,type});
    // }else{
    //   alert('请输入  亲···')
    // }
  }

  goLogin=()=>{
    this.props.history.replace('/login');
  }
  render(){
    const {type}=this.state;
   const {msg,redirectTo}=this.props.user;
   console.log(msg);

    if(redirectTo){
      return <Redirect to={redirectTo}/>
    }
    return(
      <div>
        <NavBar>硅 谷 直 聘</NavBar>
        <Logo />
        <WingBlank>
          {msg? <p className='err-msg'>{msg}</p> : ''}
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
              <Item>
                用户类型： &nbsp;&nbsp;
                <Radio
                  className="my-radio"
                  checked={type === 'dashen'}
                  onClick={() => this.handleChange('type', 'dashen')}
                >大神</Radio> &nbsp;&nbsp;&nbsp;&nbsp;
                <Radio
                  className="my-radio"
                  checked={type === 'laoban'}
                  onClick={() => this.handleChange('type', 'laoban')}
                >老板</Radio>
              </Item>
              <WhiteSpace />
              <Button type="primary" onClick={this.register}>注 册</Button>
              <WhiteSpace />
              <Button onClick={this.goLogin}>已有 账户</Button>
            </List>
          </form>
        </WingBlank>
      </div>
    )
  }
}
export default Register;