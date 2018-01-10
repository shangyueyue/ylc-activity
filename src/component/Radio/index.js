import React from 'react';

class Radio extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isChecked: props.isChecked || false
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange() {
    const isChecked = this.state.isChecked;
    this.setState({ isChecked: !isChecked });
    if (this.props.onClick) {
      this.props.onClick({ value: this.props.value, isChecked });
    }
  }

  renderDefault() {
    return <input type="radio" name="checkbox" checked onChange={this.onChange} />;
  }

  render() {
    return (
      <div onClick={this.onChange}>
        <div className="squaredCheck" style={{ verticalAlign: 'text-top' }}>
          { this.props.isChecked ?
            this.renderDefault() :
            <input type="radio" name="checkbox" checked onChange={this.onChange} />
          }
          <label />
        </div>
        <label style={this.props.textStyle}>
          { this.props.text }
        </label>
      </div>
    );
  }
}

export default Radio;
