import BaseRepository from '../../abstractions/BaseRepository';
import User, { IUser } from '../../entities/user';

class UserRepository extends BaseRepository<IUser> {
	// constructor() {
	// 	super(User);
	// }
	private static instance: UserRepository;

	private constructor() {
		super(User);
		// private constructor to prevent instantiation
	}

	static getInstance(): UserRepository {
		if (!UserRepository.instance) {
			UserRepository.instance = new UserRepository();
		}
		return UserRepository.instance;
	}

	async findByEmail(email: string): Promise<IUser | null> {
		return this.model.findOne({ email });
	}
}

export default UserRepository;
