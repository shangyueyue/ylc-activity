import 'whatwg-fetch';

const header = {
  mode: 'core',
  credentials: 'include',
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
};

function checkStatus(response) {
  if (response.status >= 200 && response.status <= 304) {
    return response.json();
  }
  return { error: true, message: '发送请求失败' };
}

function subStrParams(body) {
  if (body && Object.prototype.isPrototypeOf(body) && Object.keys(body).length) {
    const paramStr = Object.keys(body).reduce((params, currKey) => (
      params ? `${params}&${currKey}=${body[currKey]}` : `${currKey}=${body[currKey]}`
    ), '');
    return `${paramStr}`;
  }
  return body;
}

function subStrUrl(url, body) {
  if (body) {
    return `${url}?${subStrParams(body)}`;
  }
  return url;
}

function get(url, body) {
  return fetch(subStrUrl(url, body), {
    ...header,
    method: 'get'
  }).then(response => checkStatus(response));
}

function post(url, body) {
  return fetch(url, {
    ...header,
    method: 'post',
    body: subStrParams(body)
  }).then(response => checkStatus(response));
}

function put(url, body) {
  return fetch(url, {
    ...header,
    method: 'put',
    body: subStrParams(body)
  }).then(response => checkStatus(response));
}

function del(url, body) {
  return fetch(url, {
    ...header,
    method: 'delete',
    body: subStrParams(body)
  }).then(response => checkStatus(response));
}

function http(url, method = 'GET', body) {
  switch (method) {
  case 'GET':
    return get(url, body);
  case 'POST':
    return post(url, body);
  case 'PUT':
    return put(url, body);
  case 'DEL':
    return del(url, body);
  default:
    return get(url, body);
  }
}

// 设置请求超时
function reuqest(url, method = 'GET', body) {
  return Promise.race([
    http(url, method, body),
    new Promise((resolve, reject) => {
      setTimeout(() => reject('请求超时了~~'), 6000);
    })
  ]);
}

export { reuqest, get, post, put, del };

