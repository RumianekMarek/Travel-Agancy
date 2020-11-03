import React from 'react';
import PropType from 'prop-types';
import styles from './OrderOption.scss';
import {formatPrice} from '../../../utils/formatPrice';

const newValueSet = (currentValue, id, checked) => {
  if(checked){
    return [
      ...currentValue,
      id,
    ];
  } else {
    return currentValue.filter(value => value != id);
  }
};

const OrderOptionCheckboxes = ({values, currentValue, setOptionValue}) => {
  return (
    <div className={styles.checkboxes} >
      {values.map(key => {
        return (
          <label key={key.id} >
            <input type='checkbox' value={key.id} 
              checked={currentValue.find(value => value == key.id) ? true : false}
              onChange={event => setOptionValue(newValueSet(currentValue, key.id, event.currentTarget.checked))}
            />
            {key.name} ({formatPrice(key.price)})
          </label>
        );})}
    </div>
  );
};

OrderOptionCheckboxes.propTypes = {
  values: PropType.array,
  required: PropType.bool,
  currentValue: PropType.array,
  setOptionValue: PropType.func,
};

export default OrderOptionCheckboxes;