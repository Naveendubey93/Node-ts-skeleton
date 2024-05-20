import { Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { RouteDefinition } from '../types/RouteDefinition';
import { getEncryptedText } from '../utils';

interface ApiResponse {
	success: boolean;
	data?: unknown;
	error?: string;
	statusCode: number;
}

/**
 * Base Controller
 */
export default abstract class BaseController {
	public abstract routes(): RouteDefinition[];

	/**
	 * Global method to send API response
	 * @param res
	 * @param statusCode
	 */
	protected send(res: Response, statusCode: number = StatusCodes.OK): void {
		const encryptedData = getEncryptedText(res.locals.data);
		res.status(statusCode).send(encryptedData);
	}

	protected sendSuccessResponse(
		res: Response,
		statusCode: number,
		data?: unknown,
	): void {
		const encryptedData = getEncryptedText(data || res.locals.data);

		const response: ApiResponse = {
			success: true,
			data: encryptedData,
			statusCode,
		};
		res.status(statusCode).json(response);
	}

	protected static sendErrorResponse(
		res: Response,
		statusCode: number,
		error: string,
	): void {
		const response: ApiResponse = {
			success: false,
			error,
			statusCode,
		};
		res.status(statusCode).json(response);
	}
}
