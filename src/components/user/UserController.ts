import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';

import ApiError from '../../abstractions/ApiError';
import CreateUserDto from './dtos/create-user.dto';
import { IController } from '../../types/IController';

import { RouteDefinition } from '../../types/RouteDefinition';
import BaseController from '../BaseController';
import UserService from './UserService';
export default class UserController
	extends BaseController
	implements IController
{
	public basePath = 'users';

	private userService: UserService;

	constructor(userService: UserService) {
		super();
		this.userService = userService;
	}

	public routes(): RouteDefinition[] {
		return [
			{
				path: '/',
				method: 'post',
				handler: this.createUser.bind(this),
			},
			{
				path: '/:id',
				method: 'put',
				handler: this.updateUser.bind(this),
			},
			{
				path: '/:id',
				method: 'get',
				handler: this.getUserById.bind(this),
			},
		];
	}

	/**
	 * Create a new user
	 * @param req
	 * @param res
	 * @param next
	 */
	public async createUser(
		req: Request,
		res: Response,
		next: NextFunction,
	): Promise<void> {
		try {
			const userData: CreateUserDto = req.body;
			const newUser = await this.userService.createUser(userData);
			this.sendSuccessResponse(res, StatusCodes.CREATED, newUser);
		} catch (err) {
			next(err);
		}
	}

	/**
	 * Update an existing user
	 * @param req
	 * @param res
	 * @param next
	 */
	public async updateUser(
		req: Request,
		res: Response,
		next: NextFunction,
	): Promise<void> {
		try {
			const { id } = req.params;
			const userData: Partial<CreateUserDto> = req.body;
			const updatedUser = await this.userService.updateUser(id, userData);
			if (!updatedUser) {
				throw new ApiError('User not found', StatusCodes.NOT_FOUND);
			}
			this.sendSuccessResponse(res, StatusCodes.OK, updatedUser);
		} catch (err) {
			next(err);
		}
	}

	/**
	 * Get a user by Id
	 * @param {string} id
	 * @param res
	 * @param next
	 */

	public async getUserById(
		req: Request,
		res: Response,
		next: NextFunction,
	): Promise<void> {
		try {
			const { id } = req.params;
			const userData = await this.userService.getUserById(id);
			if (!userData) {
				throw new ApiError(
					`No User found with id ${id}`,
					StatusCodes.NOT_FOUND,
				);
			}
			this.sendSuccessResponse(res, StatusCodes.OK, userData);
		} catch (error) {
			next(error);
		}
	}
}
