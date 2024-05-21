import SystemStatusController from './components/system-status/SystemStatusController';

import UserController from './components/user/UserController';

import UserRepository from './components/user/UserRepository';

import UserService from './components/user/UserService';

import container from './container';
import { IController } from './types/IController';

container.register<UserRepository>(
	'UserRepository',
	UserRepository.getInstance(),
);
container.register<UserService>('UserService', UserService.getInstance());
container.register<IController>(
	'UserController',
	new UserController(container.get<UserService>('UserService')),
);
container.register<IController>(
	'SystemStatusController',
	new SystemStatusController(),
);

export default container;
