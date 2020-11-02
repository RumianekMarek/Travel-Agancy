import React from 'react';
import {Row, Col} from 'react-flexbox-grid';
import PropTypes from 'prop-types';

import OrderSummary from '../OrderSummary/OrderSummary';
import OrderOption from '../OrderOption/OrderOption';
import pricing from '../../../data/pricing.json';


class OrderForm extends React.Component {

  render(){
    const{tripCost, options, setOrderOption} = this.props;
    console.log(options);
    console.log('orderForm:',this);
    return (
      <Row>
        <div>
          {pricing.map(tag =>
            <Col mx={4} key={tag.id}>
              <OrderOption 
                name={tag.name} 
                type={tag.type} 
                currentValue={options[tag.id]}
                minValue={options[tag.id]}
                setOrderOption={setOrderOption}
                values={tag.values}
                required={tag.required}
              />
            </Col>
          )}            
        </div>
        <Col xs={12}>
          <OrderSummary tripCost={tripCost} options={options}/>
        </Col>
      </Row>  
    );
  }
}

OrderForm.propTypes= {
  tripCost: PropTypes.string,
  options: PropTypes.object,
  setOrderOption: PropTypes.object,

};

export default OrderForm;