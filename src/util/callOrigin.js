// H5调用原生，H5->原生方法

import { debug } from '../service/service.config';
import Notify from '../component/Notify';

const callMessageNative = debug ? '' : window.callMessageNative;

/**
 * 功能：获取用户信息
 * 返回信息如下：
 * step 标示 1. 微信认证通过 2. 表示已经登录，处理登录逻辑。
    usedkh 是否是华西老客户 0：否 1：是
    curstatus 当前登录状态 0：否 1：是
    status 1 资金账号已经确认 2资金账号未确认
    khtype 0 标示注册账户 1资金账号绑定
    khzh 客户主资金账号（如果绑定了）
    custid 客户号
    tel 电话
 */
function getUserInfo() {
  const USER_INFO_KEY = 'sso_user_info';
  const getInfoParam = {
    funcNo: '50041',
    moduleName: 'ycf'
  };

  if (callMessageNative && !debug) {
    const data = callMessageNative({ ...getInfoParam, key: USER_INFO_KEY });
    const userInfo = data && data.results && data.results[0].value;
    return userInfo;
  }
  return { khzh: '150000024902', khtype: '1', tel: '18368728860' };
}

/**
 * 功能：获取资金账号
 * 返回：资金账号
 */
function getTradeAccount() {
  const TRADE_INFO_KEY = 'sso_acct_value_201';
  const getInfoParam = {
    funcNo: '50041',
    moduleName: 'ycf'
  };
  if (callMessageNative && !debug) {
    const data = callMessageNative({ ...getInfoParam, key: TRADE_INFO_KEY });
    const tradeInfo = data && data.results && data.results[0].value;
    return tradeInfo;
  }
  return '150000028400';
}
/**
 * 功能：原生网关请求
 * @param {String} url 路径
 * @param {String} method 请求方式
 * @param {Object} param 请求入参
 * @param {String} busFuncNo 网关功能号
 */
function gateRequest(url, method, param = {}, busFuncNo = '2000001') {
  const isPost = method === 'GET' ? '0' : '1';
  const gateRequestParam = {
    funcNo: '50118',
    protocol: '6',
    headerMap: {
      companyId: 'THINKIVE',
      systemId: 'YCFGATE',
      busServerId: 'TK_SOCKET',
      httpDomain: 'YCFGATE',
      busFuncNo
    },
    timeOut: 30,
    mode: '6'
  };
  const data = {
    ...gateRequestParam, url, paramMap: param, isPost
  };

  return new Promise((resolve, reject) => {
    callMessageNative(data, (results) => {
      if (results) {
        return resolve(results);
      }
      return reject('service no result back');
    });
  });
}

/**
 * 功能：导航栏标题修改
 * @param {String} title 标题
 * @param {String} color 字体颜色
 * @param {String} font 字体大小
 */
function navTitle(title, color, font) {
  const navParams = {
    funcNo: '90101',
    moduleName: 'level',
    nav_title: title,
    nav_color: color,
    nav_font: font
  };

  if (callMessageNative && !debug) {
    callMessageNative({ ...navParams });
  }
}

/**
 * 功能：唤起资金登入弹窗
 */
function loginForTrade() {
  const tradeLoginParam = {
    funcNo: '50101',
    moduleName: 'sso',
    params: {
      moduleName: 'ycf',
      acct_type: '201'
    }
  };
  if (callMessageNative) {
    callMessageNative({
      ...tradeLoginParam
    });
  }
}

/**
 * 功能：弹出绑定资金界面
 */
function bundleForTrade() {
  const bundleTradeParam = {
    funcNo: '70201',
    moduleName: 'sso',
    params: {
      moduleName: 'ycf'
    }
  };

  if (callMessageNative && !debug) {
    callMessageNative({ ...bundleTradeParam });
  }
}

/**
 * 功能：发信息给壳子
 *
 */
function sendMessage() {
  const param = {
    funcNo: '80001',
    Action: '1'
  };
  if (callMessageNative && !debug) {
    callMessageNative(param);
  }
}

/**
* 功能：跳转其他模块（利用原生跳转）
* @param {String} url 跳转路径
* @param {String} moduleName 模块
* @param {String} loginType 登入方式：0(不需要) 1(手机登入) 2(资金登入)
*/
function toOtherMadule(url, moduleName, loginType = '0') {
  const toOtherModuleParam = {
    funcNo: '50101',
    moduleName: 'ycf'
  };
  const jumpParam = {
    is_open: '1',
    jump_type: '1',
    login_way: loginType,
    jump_url: url,
    model_name: moduleName,
    show_navigation: '1',
    support_share: '0'
  };

  if (callMessageNative && !debug) {
    callMessageNative({ ...toOtherModuleParam, params: jumpParam });
  }
}

/**
 * 功能：与壳子的通信，壳子才能回调h5。
 *
 */
function register() {
  const registerParam = {
    funcNo: '50100',
    moduleName: 'ycf'
  };
  if (callMessageNative && !debug) {
    callMessageNative(registerParam);
  }
}

/**
 * 监听原生分享事件,分享链接是微信
 * @param {Object} sharObj 分享参数
 */
function openShare(sharObj) {
  const localURL = sharObj.link || window.location;
  const {
    shareTypeList = '22,23,37,6,24',
    content = '赢财富推荐~~',
    title = '赢财富',
    imgUrl = 'http://wxtest.hx168.com.cn/win/app/images/zhlogo.png',
    link = localURL
  } = sharObj;

  const shareParam = {
    funcNo: '50230',
    shareTypeList,
    link,
    content,
    title,
    imgUrl
  };
  if (callMessageNative && !debug) {
    const result = callMessageNative(shareParam);
    if (result.error_no !== '0' && result.error_info) {
      Notify.make(result.error_info, 2);
    }
  }
}

export {
  getUserInfo,
  gateRequest,
  getTradeAccount,
  loginForTrade,
  bundleForTrade,
  navTitle,
  sendMessage,
  toOtherMadule,
  register,
  openShare
};
