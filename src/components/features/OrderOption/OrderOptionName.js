import React from 'react';
import PropTypes from 'prop-types';

class OrderOptionName extends React.Component {
  render(){
    return (
      <div className='name'>
        <input 
          value={this.props.currentValue}
          onChange={event => this.props.setOptionValue(event.currentTarget.value)}/>
      </div>
    );
  }
} 

OrderOptionName.propTypes= {
  setOptionValue: PropTypes.func,
  currentValue: PropTypes.string,
};

export default OrderOptionName;
