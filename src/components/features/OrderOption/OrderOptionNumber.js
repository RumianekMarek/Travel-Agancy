import React from 'react';
import styles from './OrderOption';
import PropType from 'prop-types';


const OrderOptionNumber = ({limits, currentValue, setOptionValue}) => {
  return (
    <div className={styles.number}>
      <input type='number' 
        className={styles.inputSmall}
        value={currentValue}
        min={limits.min}
        max={limits.max}
        onChange={event =>setOptionValue(event.currentTarget.value)}
      />
    </div>
  );
};

OrderOptionNumber.propTypes = {
  currentValue: PropType.string,
  setOptionValue: PropType.func,
  limits: PropType.object,
};

export default OrderOptionNumber;