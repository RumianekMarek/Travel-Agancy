import React from 'react';
import PropTypes from 'prop-types';

// import pricing from '../../../data/pricing.json';
// import {parseOptionPrice} from '../../../utils/parseOptionPrice';

import styles from './OrderSummary.scss';
import {calculateTotal} from '../../../utils/calculateTotal';
import {formatPrice} from '../../../utils/formatPrice';

class OrderSummary extends React.Component {

  getTotalPrice(){
    console.log('OrderSummary.props', this.props);
    const total = calculateTotal(formatPrice(this.props.tripCost), this.props.options);
    return total;
  }

  render(){
    return (
      <h2 className={styles.component}>Total:<strong>{this.getTotalPrice()}</strong></h2>
    );
  }
}

OrderSummary.propTypes = {
  tripCost: PropTypes.string,
  options: PropTypes.object,
};

export default OrderSummary;