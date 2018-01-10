import React from 'react';
import RadioButton from './RadioButton';

const radiioLists = [
  { value: 'G', text: '高中' },
  { value: 'D', text: '大专' },
  { value: 'B', text: '本科' },
  { value: 'S', text: '硕士' }
];
const radioPosition = {
  display: 'flex',
  justifyContent: 'space-around',
  alignItems: 'center'
};
class RadioBtnList extends React.Component {
  handleClick(id) {
    console.log(radiioLists[id].value, id);
  }
  render() {
    return (
      <div style={radioPosition}>
        <div>
          {
            radiioLists.map((item, index) =>
              (<RadioButton
                key={index}
                id={index}
                text={item.text}
                onClick={this.handleClick}
                defaultChecked="2"
              />))
          }
        </div>
      </div>
    );
  }
}
export default RadioBtnList;
