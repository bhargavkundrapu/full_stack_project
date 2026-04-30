import { Response } from 'express';

export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message: string;
}

export const sendResponse = <T>(
  res: Response,
  statusCode: number,
  message: string,
  data: T
) => {
  const response: ApiResponse<T> = {
    success: true,
    data,
    message,
  };
  return res.status(statusCode).json(response);
};
