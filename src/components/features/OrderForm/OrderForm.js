import React from 'react';
import {Row, Col} from 'react-flexbox-grid';
import PropTypes from 'prop-types';

import OrderSummary from '../OrderSummary/OrderSummary';
import OrderOption from '../OrderOption/OrderOption';
import pricing from '../../../data/pricing.json';
import settings from '../../../data/settings';
import {formatPrice} from '../../../utils/formatPrice';
import {calculateTotal} from '../../../utils/calculateTotal';

const sendOrder = (options, tripCost, trips) => {
  const totalCost = formatPrice(calculateTotal(tripCost, options));
  
  const tripId = location.pathname.substr(6);
  const targetTrip = trips.find(key => key.id == tripId);
  console.log(targetTrip);
  const tripName = targetTrip.name;
  const tripCountryCode = targetTrip.country.code;

  const payload = {
    tripId,
    tripName,
    tripCountryCode,
    ...options,
    totalCost,
  };

  const url = settings.db.url + '/' + settings.db.endpoint.orders;

  const fetchOptions = {
    cache: 'no-cache',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  };

  fetch(url, fetchOptions)
    .then(function(response){
      return response.json();
    }).then(function(parsedResponse){
      console.log('parsedResponse', parsedResponse);
    });
};

class OrderForm extends React.Component {
  render(){
    const{tripCost, options, setOrderOption} = this.props;
    return (
      <Row>
        <div>
          {pricing.map(tag =>
            <Col mx={4} key={tag.id}>
              <OrderOption 
                limits={tag.limits}
                name={tag.name} 
                type={tag.type} 
                currentValue={options[tag.id]}
                id={tag.id}
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
        <Col>
          <button onClick={() => {
            const warnings = document.querySelectorAll('[class="contactWarning"]');
            for (let i=0; i<warnings.length; i++)
              warnings[i].remove();

            if (options.contactName.length > 2) {
              if (options.contact.length > 7) {
                sendOrder(options, tripCost, this.props.trips);
              }} 
            if (options.contactName.length < 3) {
              const contactWarning = document.createElement('div');
              contactWarning.className = 'contactWarning';
              contactWarning.innerText = 'please put Your Name';
              document.querySelector('[class="contactName"]').after(contactWarning);
            }
            if (options.contact.length < 8) {
              const contactWarning = document.createElement('div');
              contactWarning.className = 'contactWarning';
              contactWarning.innerText = 'please put Your Contact Information';
              document.querySelector('[class="contact"]').after(contactWarning);
            }
              
          }}
          >Order now!</button>
        </Col>
      </Row>  
    );
  }
}

OrderForm.propTypes= {
  tripCost: PropTypes.string,
  options: PropTypes.object,
  setOrderOption: PropTypes.func,
  trips: PropTypes.array,

};

export default OrderForm;