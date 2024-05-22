import { Router } from 'express';
import container from './inversify.config';
import { IController } from './types/IController';
import { RouteDefinition } from './types/RouteDefinition';

function registerControllerRoutes(routes: RouteDefinition[]): Router {
	const controllerRouter = Router();
	routes.forEach((route) => {
		switch (route.method) {
			case 'get':
				controllerRouter.get(route.path, route.handler);
				break;
			case 'post':
				controllerRouter.post(route.path, route.handler);
				break;
			case 'put':
				controllerRouter.put(route.path, route.handler);
				break;
			case 'patch':
				controllerRouter.patch(route.path, route.handler); // Corrected from .put to .patch
				break;
			case 'delete':
				controllerRouter.delete(route.path, route.handler);
				break;
			default:
				throw new Error(`Unsupported HTTP method: ${route.method}`);
		}
	});
	return controllerRouter;
}

export default function registerRoutes(): Router {
	const router = Router();
	const controllers: IController[] = [
		container.get<IController>('SystemStatusController'),
		container.get<IController>('UserController'),
	];

	controllers.forEach((controller) => {
		router.use(
			`/v1/${controller.basePath}`,
			registerControllerRoutes(controller.routes()),
		);
	});
	return router;
}
