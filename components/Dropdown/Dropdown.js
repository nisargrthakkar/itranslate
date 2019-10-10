import React, { Component } from 'react'
import PropTypes from 'prop-types';
import DropdownStyled from './DropdownStyled';

class Dropdown extends Component {
  
  static propTypes = {
    updatedFieldName: PropTypes.string,
    list: PropTypes.array,
    selectedValue: PropTypes.object
  };

  render() {
    const { list, updatedFieldName, selectedValue } = this.props
    return (
      <DropdownStyled className="langMainBox">
        <div className="selectedLang">
          <span><img src={selectedValue.image} alt={selectedValue.name} /></span>
          <ul className="languageDropDown">
            {list && list.map((item) => (
              <li value={item.code} key={item.id} onClick={() => this.props.onHandleSelect(item, updatedFieldName)}>
                <span><img src={item.image} alt={item.name} /></span>
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      </DropdownStyled>
    )
  }
}

export default Dropdown