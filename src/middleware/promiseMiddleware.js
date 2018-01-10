import { reuqest } from '../service/request';
import { gateRequest } from '../util/callOrigin';
import Notify from '../component/Notify';
import { debug, HTTP_HOST, HTTP_HOST_YCF, BUS_FUNC_NO1 } from '../service/service.config';

// 为了方便开发：生产走网关请求，开发用http请求
const promiseMiddleware = () => next => (action) => {
  const {
    type, meta, payload, busFuncNo
  } = action;
  if (!meta) {
    return next(action);
  }

  const [LOADING, SUCCESS, ERROR] = type;
  const { url, method = 'GET' } = meta;

  next({ payload, type: LOADING });

  if (debug) {
    const URL = busFuncNo === BUS_FUNC_NO1 ? HTTP_HOST + url : HTTP_HOST_YCF + url;
    reuqest(URL, method, payload).then((res) => {
      if (!parseInt(res.error_no, 10)) {
        return next({ payload, type: SUCCESS, result: res });
      }
      if (res.error_no) {
        if (res.error_info) {
          Notify.make(res.error_info, 2);
        }
        return next({ payload, type: ERROR, result: res });
      }
    }).catch((e) => {
      Notify.make(e, 2);
      next({ payload, type: ERROR });
    });
  } else {
    gateRequest(url, method, payload, busFuncNo).then((res) => {
      if (!parseInt(res.error_no, 10)) {
        return next({ payload, type: SUCCESS, result: res });
      }
      if (res.error_no) {
        if (res.error_info) {
          Notify.make(res.error_info, 2);
        }
        return next({ payload, type: ERROR, result: res });
      }
    }).catch((e) => {
      Notify.make(e, 2);
      next({ payload, type: ERROR });
    });
  }
};

export default promiseMiddleware;
