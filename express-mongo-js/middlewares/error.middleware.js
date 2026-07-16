import { HttpStatus } from "../utils/index.js";

export function errorMiddleware(err, _, res, __) {
  if (err) {
    let r = {
      status: err.statusText || "UnknownError",
      message: err.message,
    };

    if (process.env.NODE_ENV === "development") {
      const stackLines = err.stack
        .split("\n")
        .map((line) => line.trim())
        .filter((line) => line !== "");
      r.stack = stackLines;
    }

    res.status(err.statusCode || HttpStatus.InternalServerError).json(r);
  }
}
