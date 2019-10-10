import React from 'react';
import Homestyled from './homestyled';
import Dropdown from '../../components/Dropdown/Dropdown';
import languageDropDownValue from '../../utils/languageDropDownValue';
import { translate } from '../../utils/translateFuncations';
import de from '../../static/data/de.json';
import en from '../../static/data/en.json';

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      fromLangObj: { ...languageDropDownValue[0], inputValue: '', data: en },
      toLangObj: { ...languageDropDownValue[1], inputValue: '', data: de }
    }
    this.onHandleChange = this.onHandleChange.bind(this);
    this.onHandleSwipe = this.onHandleSwipe.bind(this);
    this.onHandleSelect = this.onHandleSelect.bind(this);
    this.onHandleTranslate = this.onHandleTranslate.bind(this);
  }

  // User input event
  onHandleChange = (e, toFromValue) => {
    const lngInputValue = e.target.value;
    this.onHandleTranslate(lngInputValue, toFromValue)
  }

  // Swipe Event
  onHandleSwipe = () => {
    this.setState((prevState) => ({
      fromLangObj: {
        ...prevState.toLangObj
      },
      toLangObj: {
        ...prevState.fromLangObj
      }
    }));
  }

  // Dropdown change event
  onHandleSelect = (selectedLng, updatedFieldName) => {
    this.setState((prevState) => ({
      [updatedFieldName]: {
        ...prevState[updatedFieldName],
        ...selectedLng,
        data: require(`../../static/data/${selectedLng.code}.json`)
      }
    }), () => {
      this.onHandleTranslate(this.state.fromLangObj.inputValue, updatedFieldName);
    });
  }

  // Translate Function translate value based on Input/Select
  onHandleTranslate = (lngInputValue, updatedFieldName) => {
    const { fromLangObj, toLangObj } = this.state;
    const resultString = translate(lngInputValue, fromLangObj.data, toLangObj.data);
    this.setState((prevState) => ({
      fromLangObj: {
        ...prevState.fromLangObj,
        inputValue: lngInputValue
      },
      toLangObj: {
        ...prevState.toLangObj,
        inputValue: resultString,
      }
    }));
  }

  // Render Text Box Based on toFromValueObj (Value of Obj is to-lng Value or from-lng Value Obj)
  renderInputTextBox(updatedFieldNameObj, updatedFieldName, readOnly = false) {
    return (
      <textarea
        type="text"
        className="langInputBox"
        placeholder={`${updatedFieldName == 'fromLangObj' ? 'From' : 'To'} ${updatedFieldNameObj.name}`}
        name={updatedFieldNameObj.code}
        value={updatedFieldNameObj.inputValue}
        onChange={(e) => { this.onHandleChange(e, updatedFieldName) }}
        readOnly={readOnly}
      />
    )
  }

  render() {
    const { fromLangObj, toLangObj } = this.state;
    return (
      <Homestyled>
        <div className="container">
          <div className="inputGroupBox">
            <Dropdown
              list={languageDropDownValue}
              updatedFieldName={'fromLangObj'}
              onHandleSelect={this.onHandleSelect}
              selectedValue={fromLangObj}
            />
            {this.renderInputTextBox(fromLangObj, 'fromLangObj')}
          </div>
          <span onClick={(e) => { this.onHandleSwipe() }} className="swipBox">
            <span className="iconBox"><img src="/static/images/shipIcon.png" alt="swip" /></span>
          </span>
          <div className="inputGroupBox">
            <Dropdown
              list={languageDropDownValue}
              updatedFieldName={'toLangObj'}
              onHandleSelect={this.onHandleSelect}
              selectedValue={toLangObj}
            />
            {this.renderInputTextBox(toLangObj, 'toLangObj', true)}
          </div>
        </div>
      </Homestyled>
    );
  }
}

export default Home;