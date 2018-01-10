/**
 * 自动绑定函数，生成新的函数
 * @param {Object} initialState 初始值
 * @param {Object} handleReduces  对象函数
 */
const handleReducers = (initialState, handleReduces) => (state = initialState, action) => {
  const reduceFn = handleReduces[action.type];
  if (!reduceFn) return state;
  return { ...state, ...reduceFn(state, action) };
};

export default handleReducers;
