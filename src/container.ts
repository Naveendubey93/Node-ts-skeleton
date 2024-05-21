import { IController } from './types/IController';

class Container {
	private instances: Map<string, any> = new Map();

	register<T>(key: string, instance: T): void {
		if (!this.instances.has(key)) {
			this.instances.set(key, instance);
		}
	}

	get<T>(key: string): T {
		const instance = this.instances.get(key);
		if (!instance) {
			throw new Error(`No instance found for key: ${key}`);
		}
		return instance;
	}
}

const container = new Container();
export default container;
