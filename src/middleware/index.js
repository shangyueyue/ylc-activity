import loggerMiddleware from './loggerMiddleware';
import promiseMiddleware from './promiseMiddleware';
import { debug } from '../service/service.config';

const middlewares = [
  promiseMiddleware,
  debug && loggerMiddleware
].filter(Boolean);

export default middlewares;
