import {
  getUserInfo,
  getTradeAccount
} from './callOrigin';
import {
  TRADE_LOGIN_TYPE,
  loginTrade,
  bundleTrade
} from './callbackH5';

const BUNDLE_TRADE_STATUS = 1;

function isLoginTrade() {
  if (getTradeAccount()) {
    return true;
  }
  return false;
}

function isBundleTrade() {
  const userInfo = getUserInfo();
  if (userInfo.khtype && parseInt(userInfo.khtype, 10) === BUNDLE_TRADE_STATUS) {
    return true;
  }
  return false;
}
/**
 * 验权：资金账号绑定、资金账号登入
 * @param {Function} callback
 */
function authority(callback) {
  if (!isBundleTrade()) {
    bundleTrade(callback);
    return;
  }
  if (!isLoginTrade()) {
    loginTrade(TRADE_LOGIN_TYPE, callback);
    return;
  }
  if (callback) {
    callback();
  }
}

export {
  isLoginTrade,
  isBundleTrade,
  authority
};
