import { RouteDefinition } from './RouteDefinition';

export interface IController {
	basePath: string;
	routes(): RouteDefinition[];
}
