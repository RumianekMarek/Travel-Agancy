import React from 'react';
import styles from './OrderOption.scss';
import OrderOptionDropdown from'./OrderOptionDropdown';
import OrderOptionIcons from'./OrderOptionIcons';
import OrderOptionNumber from'./OrderOptionNumber';
import OrderOptionCheckboxes from'./OrderOptionCheckboxes';
import {formatPrice} from '../../../utils/formatPrice';
import OrderOptionName from './OrderOptionName';
import OrderContactDate from './OrderContactDate';

const optionTypes = {
  dropdown: OrderOptionDropdown,
  icons: OrderOptionIcons,
  checkboxes: OrderOptionCheckboxes,
  number: OrderOptionNumber,
  text: OrderOptionName,
  date: OrderContactDate,
};

const OrderOption = ({name, type, setOrderOption, id , ...otherProps}) => {
  const OptionComponent = optionTypes[type];
  if(!OptionComponent){
    return null;
  } else {
    return (
      <div className={styles.component}>
        <h3 className={styles.title}>{name}</h3>
        <OptionComponent 
          {...otherProps}
          setOptionValue={value => setOrderOption({[id]: value})}
          id ={id}
          formatPrice={formatPrice}
        />{}
      </div>
    );
  }
};

export default OrderOption;