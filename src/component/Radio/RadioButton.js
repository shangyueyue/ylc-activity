import React from 'react';

class RadioButton extends React.Component {
  constructor(props) {
    super(props);
  }
  handleChange(id) {
    if (this.props.onClick) {
      this.props.onClick(id);
    }
  }
  _preventDefualtEvent(e) {
    e.stopPropagation();
  }
  render() {
    const { id, text, defaultChecked } = this.props;
    return (
      <div style={{ lineHeight: '16px' }}>
        <span onClick={this.handleChange.bind(this, id)}>
          <div className="squaredCheck" style={{ verticalAlign: 'text-top', margin: '0px' }} >
            <input type="radio" name="checkbox" id={`checked-${id}`} defaultChecked={defaultChecked == id} />
            <label htmlFor={`checked-${id}`} onClick={this._preventDefualtEvent.bind(this)} style={{ margin: 0 }} />
          </div>
        </span>
        <label htmlFor={`checked-${id}`}>{ text || '' }</label>
      </div>
    );
  }
}
export default RadioButton;
