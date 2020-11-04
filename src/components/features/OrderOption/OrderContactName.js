import React from 'react';
import PropTypes from 'prop-types';

class OrderContactName extends React.Component {
  render(){
    return (
      <div>
        <input onChange={event => this.props.setOptionValue(event.currentTarget.value)}/>
      </div>
    );
  }
} 

OrderContactName.propTypes= {
  setOptionValue: PropTypes.func,
};

export default OrderContactName;
