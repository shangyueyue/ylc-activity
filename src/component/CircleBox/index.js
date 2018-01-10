import React from 'react';

const defaultStyle = {
  width: '16px',
  height: '16px',
  border: '1px solid #c81527',
  borderRadius: '50%',
  display: 'flex'
};

const cirleStyle = {
  width: '100%',
  height: '100%',
  border: '3px solid #fff',
  borderRadius: '50%',
  background: '#dc1a2d'
};

class CircleBox extends React.Component {
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
      this.props.onClick({ value: this.props.value, isChecked: !isChecked });
    }
  }

  renderCircle() {
    return (
      <div
        style={defaultStyle}
      />
    );
  }

  renderFullCircle() {
    return (
      <div style={defaultStyle}>
        <div style={cirleStyle} />
      </div>
    );
  }

  render() {
    return (
      <div style={{ display: 'flex' }} onClick={this.onChange}>
        { this.state.isChecked ? this.renderFullCircle() : this.renderCircle() }
        <p style={{ paddingLeft: '5px', display: 'flex', flex: '10' }}>
          { this.props.text }
        </p>
      </div>
    );
  }
}

export default CircleBox;
