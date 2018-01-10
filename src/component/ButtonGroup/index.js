import React from 'react';

const layoutSty = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center'
};
const btnSty = {
};
class ButtonGroup extends React.Component {
  onBtnClick(action) {
    if (this.props.onBtnClick) {
      this.props.onBtnClick(action);
    }
  }

  createBtn() {
    const btnList = this.props.buttonList || [];
    const btn = btnList.map((item, index) => {
      const { label, action } = item;
      return (
        <button key={action} onClick={this.onBtnClick.bind(this, action)} >
          {label}
        </button>
      );
    });
    return btn;
  }

  render() {
    return (
      <div style={layoutSty}>
        {this.createBtn()}
      </div>
    );
  }
}

export default ButtonGroup;
