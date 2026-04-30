import { Request, Response } from 'express';
import { catchAsync } from '../utils/catchAsync';
import { sendResponse } from '../utils/response';
import { httpStatus } from '../utils/httpStatus';
import * as healthService from '../services/health.service';
import { ApiError } from '../middleware/error.middleware';

export const getHealth = catchAsync(async (req: Request, res: Response) => {
  try {
    const healthStatus = await healthService.checkHealth();
    sendResponse(res, httpStatus.OK, 'Server and Database are healthy', healthStatus);
  } catch (error) {
    throw new ApiError(httpStatus.INTERNAL_SERVER_ERROR, 'Database connection failed', error);
  }
});
