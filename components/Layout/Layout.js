import React from 'react';
import PropTypes from 'prop-types';
import Commonstyled from '../../theme/custom/Commonstyled';
import Layoutstyled from '../Layout/Layoutstyled';

class Layout extends React.Component {
  
  static propTypes = {
    children: PropTypes.any
  };

  render() {
    return (
      <Layoutstyled className="layoutMainBox">
        <Commonstyled />
        {this.props.children}
      </Layoutstyled>
    );
  }
}

export default Layout;
