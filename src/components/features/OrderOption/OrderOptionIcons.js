import React from 'react';
import PropType from 'prop-types';
import styles from './OrderOption.scss';
import Icon from '../../common/Icon/Icon';

const active = target => {
  const table = document.querySelectorAll('.icon i');
  for(let i=0; i<table.length; i++) {
    table[i].parentElement.classList.remove(styles.iconActive);
  }
  target.classList.add(styles.iconActive); 
};

const OrderOptionIcons = ({values, required, currentValue, setOptionValue}) => {
  console.log(currentValue);
  return (
    <div className='styles.component icon' >
      {required ? '' : (
        <option key='null' value=''>---</option>
      )}
      {values.map(key =>
        <div className={styles.icon} key={key.id} 
          onClick={event => {
            setOptionValue(key.id);
            active(event.currentTarget); 
          }}>
          <Icon name={key.icon} />
        </div>
      )}
    </div>
  );
};

OrderOptionIcons.propTypes = {
  values: PropType.array,
  required: PropType.bool,
  currentValue: PropType.string,
  setOptionValue: PropType.func,
};

export default OrderOptionIcons;