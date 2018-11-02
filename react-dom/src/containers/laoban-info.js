/**
 * Created by mjc on 2018/11/2.
 */
import {connect} from 'react-redux';

import LaobanInfo from '../commponents/laoban-info';
import {updataUserInfo} from '../redux/actions';

export default connect(
  state=>({user:state.user}),
  {updataUserInfo}
)(LaobanInfo)