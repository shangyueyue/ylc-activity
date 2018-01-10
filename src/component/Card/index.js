import React from 'react';
import style from './style.css';

class Card extends React.Component {
  onAirticleDetail(linkURL) {
    this.context.router.push(linkURL);
  }
  render() {
    const {
      linkURL, name, issubscribe, abstract, unlocknum, author, publicTime
    } = this.props;
    return (
      <div className={style.cardContainer}>
        <div className={style.itemList}>
          <div onClick={this.onAirticleDetail.bind(this, linkURL)}>
            <div className={style.listName}>
              { Number(issubscribe) === 1 ? `【已解锁】${name}` : name }
            </div>
            <div className={style.listContent}>
              <p style={{ marginBottom: '0' }} dangerouslySetInnerHTML={{ __html: abstract }} />
            </div>
            <div className={style.listFooter}>
              <span className={style.cardExtraTitle}>
                <i className="icon icon-suo" />
                { unlocknum ? ` ${unlocknum}人解锁` : '0' }
              </span>
              <span className={style.cardExtraPopup}>{ author || (publicTime || null) }</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
Card.contextTypes = {
  router: React.PropTypes.object.isRequired
};


export default Card;
