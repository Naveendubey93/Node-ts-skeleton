import { IUser } from '../../entities/user';
import UserRepository from './UserRepository';

class UserService {
	private userRepository: UserRepository;

	constructor(userRepository: UserRepository) {
		this.userRepository = userRepository;
	}

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

export default UserService;
