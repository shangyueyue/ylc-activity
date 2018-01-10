import React from 'react';
import ScaleModal from 'boron/ScaleModal';
import _style from './style.css';


class Modal extends React.Component {
  constructor(props) {
    super(props);

    this.handleOk = this.handleOk.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }
  show() {
    this.scaleModal.show();
  }

  hide() {
    this.scaleModal.hide();
  }

  handleOk() {
    if (this.props.onOk) {
      this.props.onOk();
    }
  }

  handleCancel() {
    if (this.props.onCancel) {
      this.props.onCancel();
    }
  }

  renderContext() {
    const {
      title, context, onOk, onCancel, okText, cancelText
    } = this.props;
    return (
      <div>
        <h2 className={_style.modalHeader}>{ title || '系统提示' }</h2>
        <div className={_style.modalContext}>
          { context || null }
        </div>
        <div className={_style.modalFoot}>
          { onOk ? <a className={_style.modalBtn} onClick={this.handleOk} style={{ color: '#d64242' }}>
            { okText || '确定' }
          </a> : null }
          { onCancel ? <a className={_style.modalBtn} onClick={this.handleCancel}>
            { cancelText || '取消' }
          </a> : null }
        </div>
      </div>
    );
  }

  render() {
    return (
      <div>
        <ScaleModal
          ref={modal => (this.scaleModal = modal)}
          className={_style.modalContain}
        >
          { this.renderContext() }
        </ScaleModal>
      </div>
    );
  }
}

export default Modal;
