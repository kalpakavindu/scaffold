import { HttpStatus } from '../utils/index.js';

export function errorMiddleware(err, _, res, __) {
  if (err) {
    let r = {
      status: err.statusText || 'UnknownError',
      message: err.message,
    };

    if (process.env.NODE_ENV === 'development') {
      r.stack = err.stack;
    }

    res.status(err.statusCode || HttpStatus.InternalServerError).json(r);
  }
}
