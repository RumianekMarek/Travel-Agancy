import React from 'react';
import PropType from 'prop-types';
import styles from './OrderOption.scss';
import {formatPrice} from '../../../utils/formatPrice';

const OrderOptionDropdown = ({values, required, currentValue, setOptionValue}) => {
  return (
    <select
      className={styles.dropdown}
      value={currentValue}
      onChange={event => setOptionValue(event.currentTarget.value)}
    >
      {required ? '' : (
        <option key='null' value=''>---</option>
      )}
      {values.map(value => (
        <option key={value.id} value={value.id}>{value.name} ({formatPrice(value.price)})</option>
      ))}
    </select>
  );
};

OrderOptionDropdown.propTypes = {
  values: PropType.array,
  required: PropType.bool,
  currentValue: PropType.string,
  setOptionValue: PropType.func,
};

export default OrderOptionDropdown;