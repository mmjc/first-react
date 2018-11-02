

import {connect} from 'react-redux';

import Register from '../commponents/register';

import {register} from '../redux/actions';

export default connect(
  state => ({user: state.user}),
  {register}
)(Register)