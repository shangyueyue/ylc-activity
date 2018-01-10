import React from 'react';

class CheckBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: props.isChecked || false
    };
    this.onCheckClick = this.onCheckClick.bind(this);
  }

  onCheckClick() {
    const { isChecked } = this.state;
    this.setState({ isChecked: !isChecked });

    if (this.props.onChange) {
      this.props.onChange(!isChecked);
    }
  }

  render() {
    const { id = 'checkBox', text } = this.props;
    return (
      <div style={{ height: '16px', lineHeight: '14px', display: 'inline-block' }}>
        <div className="squaredCheck">
          <input type="checkbox" name="checkbox" id={id} checked={this.state.isChecked} onChange={this.onCheckClick} />
          <label />
        </div>
        <label style={{ margin: 0 }} htmlFor={id} >
          { text || '' }
        </label>
      </div>
    );
  }
}

export default CheckBox;
