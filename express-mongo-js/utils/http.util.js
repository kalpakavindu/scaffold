export const HttpStatus = Object.freeze({
  OK: 200,
  Created: 201,
  Accepted: 202,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,

  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  RequestTimeout: 408,
  Conflict: 409,
  LengthRequired: 411,
  ContentTooLarge: 413,
  URITooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  TooManyRequests: 429,

  InternalServerError: 500,
  NotImplemented: 501,
  ServiceUnavailable: 503,
});

export class HttpError extends Error {
  statusCode;
  statusText;

  constructor(message, status = HttpStatus.InternalServerError) {
    super(message);
    this.statusCode = status;

    const entry = Object.entries(HttpStatus).find(([_, v]) => v === status);
    this.statusText = entry ? entry[0] : 'UnknownError';

    Object.setPrototypeOf(this, HttpError.prototype);
  }
}
