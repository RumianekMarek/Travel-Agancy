import { getDefaultLocale } from 'react-datepicker';
import {connect} from 'react-redux';
import { getOrderOptions, setOrderOption, setDate } from '../../../redux/orderRedux';
import OrderForm from './OrderForm';


const mapStateToProps = state => ({
  options: getOrderOptions(state),
  date: getDefaultLocale(state),
});

const mapDispatchToProps = dispatch => ({
  setOrderOption: option => dispatch(setOrderOption(option)),
  setDate: date => dispatch(setDate(date)),
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderForm);