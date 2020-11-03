import React from 'react';
import styles from './OrderOption.scss';
import OrderOptionDropdown from'./OrderOptionDropdown';
import OrderOptionIcons from'./OrderOptionIcons';
import OrderOptionNumber from'./OrderOptionNumber';
import OrderOptionCheckboxes from'./OrderOptionCheckboxes';
//import { setOrderOption } from '../../../redux/orderRedux';
import {formatPrice} from '../../../utils/formatPrice';

const optionTypes = {
  dropdown: OrderOptionDropdown,
  icons: OrderOptionIcons,
  checkboxes: OrderOptionCheckboxes,
  number: OrderOptionNumber,
};

const OrderOption = ({name, type, setOrderOption,id , ...otherProps}) => {
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
          formatPrice={formatPrice}
        />{}
      </div>
    );
  }
};

export default OrderOption;