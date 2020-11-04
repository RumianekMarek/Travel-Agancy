import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import PropTypes from 'prop-types';

class OrderContactDate extends React.Component {
  render(){
    return(
      <DatePicker selected={this.props.currentValue}
        onChange={event => this.props.setOptionValue(event)}
      />
    );
  }
}

OrderContactDate.propTypes= {
  setOptionValue: PropTypes.func,
  currentValue: PropTypes.instanceOf(Date),
};

export default OrderContactDate;