/**
 * 自动绑定函数，生成新的函数
 * @param {Array} funcArray 数组函数名
 * @param {Object} context  向下文this
 */
function autoBind(funcArray, context) {
  funcArray.forEach((funcName) => {
    context[funcName] = context[funcName].bind(context);
  });

  return context;
}

export default autoBind;
