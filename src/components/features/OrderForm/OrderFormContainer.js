import {connect} from 'react-redux';
import { getOrderOptions, setOrderOption } from '../../../redux/orderRedux';
import OrderForm from './OrderForm';


const mapStateToProps = state => ({
  options: getOrderOptions(state),
  setOrderOption: setOrderOption(state),
});

export default connect(mapStateToProps)(OrderForm);