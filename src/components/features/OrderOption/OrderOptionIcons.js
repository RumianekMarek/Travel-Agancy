import React from 'react';
import PropType from 'prop-types';
import styles from './OrderOption.scss';
import Icon from '../../common/Icon/Icon';

const OrderOptionIcons = ({values, currentValue, setOptionValue}) => {
  return (
    <div className='styles.component' >
      {values.map(key =>
        <div className={currentValue == key.id ? styles.iconActive : styles.icon} key={key.id} value={key.id}
          onClick={() => setOptionValue(key.id)}
        >
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