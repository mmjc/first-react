/**
 * Created by mjc on 2018/10/31.
 */
import React,{Component} from 'react';
import {Route,Switch} from 'react-router-dom';
import LaobanInfo from '../../containers/laoban-info';
import DashenInfo from '../dashen-info';

class Main extends Component{
  render(){
    return(
      <div>
        <Switch>
          <Route path="/laobanInfo" component={LaobanInfo}/>;
          <Route path="/dashenInfo" component={DashenInfo}/>;
        </Switch>
      </div>
    )
  }
}
export default Main;