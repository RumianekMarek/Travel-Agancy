import React from 'react';
import PropTypes from 'prop-types';

class OrderOptionName extends React.Component {
  render(){
    return (
      <div className={this.props.id}>
        <input 
          value={this.props.currentValue}
          onChange={event => this.props.setOptionValue(event.currentTarget.value)}
        />
      </div>
    );
  }
} 

OrderOptionName.propTypes= {
  setOptionValue: PropTypes.func,
  currentValue: PropTypes.string,
  id: PropTypes.string,
};

export default OrderOptionName;
