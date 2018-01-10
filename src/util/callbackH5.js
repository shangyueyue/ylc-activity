// 原生回调H5，原生->H5

import { loginForTrade, bundleForTrade } from './callOrigin';

// 104手机用户登入，201资金账号登入
const PHONE_LOGIN_TYPE = '104';
const TRADE_LOGIN_TYPE = '201';


/**
 * 功能：原生登入资金账号信息返回，function70101
 * state：0成功 1不成功
 * @param {String} type 调登入弹出框
 * @param {Function} callback 成功执行函数
 */
function loginTrade(type, callback) {
  if (type === TRADE_LOGIN_TYPE) {
    loginForTrade();
  }
  if (callback && window) {
    const LOGIN_CALL_BACK_FUNC = 'function70101';
    window[LOGIN_CALL_BACK_FUNC] = function (paramMap) {
      const { params } = paramMap;
      // 如果是手机登入
      if (params && parseInt(params.acct_type, 10) === 104) { // android 返回104，ios是'104'
        return;
      }
      if (parseInt(paramMap.state, 10) === 0 && callback) { // android 返回state的是0，ios是'0'
        callback();
      }
    };
  }
}

/**
 * 功能：原生登入资金账号信息返回
 * 调用函数：function70202、function70101、function60401
 * state: 0成功 1失败
 * 逻辑：function70202绑定信息返回、绑定后登入资金账号function70101、退出
 * @param {Function} callback 成功执行函数
 */
function bundleTrade(callback) {
  bundleForTrade();

  if (window) {
    const BUNDLE_TRADE_CALL_BACK_FUNC = 'function70202';
    window[BUNDLE_TRADE_CALL_BACK_FUNC] = function (paramMap) {
      const { params } = paramMap;
    };

    const BUNDLE_LOGIN_BACK_FUNC = 'function70101';
    window[BUNDLE_LOGIN_BACK_FUNC] = function (paramMap) {
      const { params } = paramMap;
      if (parseInt(paramMap.state, 10) === 0 && callback) {
        // 登入成功
        callback();
      }
    };

    const BUNDLE_LOGIN_OUT_BACK_FUNC = 'function60401';
    window[BUNDLE_LOGIN_OUT_BACK_FUNC] = function (paramMap) {
      // 退出
    };
  }
}

export {
  TRADE_LOGIN_TYPE,
  loginTrade,
  bundleTrade
};
