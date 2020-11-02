import React from 'react';
import styles from './OrderOption';
import PropType from 'prop-types';


const OrderOptionNumber = ({currentValue, setOptionValue}) => {
  return (
    <div className={styles.number}>
      <input type='number' 
        className={styles.imputSmall}
        value={currentValue}
        onChange={event => {
          setOptionValue(event.currentTarget.value); 
          console.log(event.currentTarget.value);}}
      />{}
    </div>
  );
};

OrderOptionNumber.propTypes = {
  currentValue: PropType.number,
  setOptionValue: PropType.func,
};

export default OrderOptionNumber;