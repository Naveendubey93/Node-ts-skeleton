import { IUser } from '../../entities/user';
import UserRepository from './UserRepository';

export default class UserService {
	private static instance: UserService;

	private userRepository: UserRepository;

	private constructor(userRepository: UserRepository) {
		this.userRepository = userRepository;
	}

	static getInstance(): UserService {
		if (!UserService.instance) {
			const userRepository = UserRepository.getInstance();
			UserService.instance = new UserService(userRepository);
		}
		return UserService.instance;
	}
	// private userRepository: UserRepository;

	// constructor(userRepository: UserRepository) {
	// 	this.userRepository = userRepository;
	// }

	async createUser(data: Partial<IUser>): Promise<IUser> {
		return this.userRepository.create(data);
	}

	async getUserByEmail(email: string): Promise<IUser | null> {
		return this.userRepository.findByEmail(email);
	}

	async getUserById(id: string): Promise<IUser | null> {
		return this.userRepository.findById(id);
	}

	async updateUser(id: string, data: Partial<IUser>): Promise<IUser | null> {
		return this.userRepository.update(id, data);
	}

	async deleteUser(id: string): Promise<IUser | null> {
		return this.userRepository.delete(id);
	}
}

// export default UserService;
