import { Request, Response, NextFunction } from 'express';
import { httpStatus } from '../utils/httpStatus';

export class ApiError extends Error {
  statusCode: number;
  details?: any;

  constructor(statusCode: number, message: string, details?: any) {
    super(message);
    this.statusCode = statusCode;
    this.details = details;
    Error.captureStackTrace(this, this.constructor);
  }
}

export const errorHandler = (
  err: any,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  let statusCode = err.statusCode || httpStatus.INTERNAL_SERVER_ERROR;
  let message = err.message || 'Internal Server Error';

  res.status(statusCode).json({
    success: false,
    message,
    error: {
      statusCode,
      details: err.details,
      ...(process.env.NODE_ENV === 'development' && { stack: err.stack }),
    },
  });
};

export const notFoundHandler = (req: Request, res: Response, next: NextFunction) => {
  const error = new ApiError(httpStatus.NOT_FOUND, `Route not found - ${req.originalUrl}`);
  next(error);
};
