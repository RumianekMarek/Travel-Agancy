import React from 'react';
import PropTypes from 'prop-types';

import pricing from '../../../data/pricing.json';
import {parseOptionPrice} from '../../../utils/parseOptionPrice';

import styles from './OrderSummary.scss';
//import calculateTotal from '../../../utils/calculateTotal';
//import formatPrice from '../../../utils/formatPrice';

class OrderSummary extends React.Component {

  calculateTotal = (tripCost, options) => {
    let total = parseOptionPrice(tripCost).value;
    let multiplier = 0;
    for (let option of pricing) {
      const currentValue = options[option.id];
      if (typeof (currentValue) != 'undefined') {
        if (Array.isArray(currentValue) && Array.isArray(option.values)) {
          for (let optionId of currentValue) {
            const value = option.values.filter(opt => opt.id == optionId)[0];
            const price = parseOptionPrice(value.price);
            if (price.type == 'multiplier') {
              multiplier += price.value;
            }
            else if (price.type == 'number') {
              total += price.value;
            }
          }
        }
        else if (currentValue !== '' && Array.isArray(option.values)) {
          const value = option.values.filter(opt => opt.id == currentValue)[0];
          const price = parseOptionPrice(value.price);
          if (price.type == 'multiplier') {
            multiplier += price.value;
          }
          else if (price.type == 'number') {
            total += price.value;
          }
        }
        else if (option.type == 'number') {
          const price = parseOptionPrice(option.price);
          if (price.type == 'multiplier') {
            multiplier += price.value * currentValue;
          }
          else if (price.type == 'number') {
            total += price.value * currentValue;
          }
        }
      }
    }
    return total * multiplier;
  };
  
  formatPrice = price => {
    return typeof(price) != 'number'
      ? price
      : Math.ceil(price)
        .toLocaleString('en-US', {
          style: 'currency',
          currency: 'USD',
          minimumFractionDigits: 0,
          maximumFractionDigits: 0,
        });
  };

  getTotalPrice(){
    console.log('OrderSummary.props', this.props);
    const total = this.calculateTotal(this.formatPrice(this.props.tripCost), this.props.options);
    //console.log ('total: ',total);
    return total;
  }

  render(){
    //const {tripCost, options} = this.props;
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