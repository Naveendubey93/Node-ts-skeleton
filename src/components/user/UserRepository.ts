import BaseRepository from '../../abstractions/BaseRepository';
import User, { IUser } from '../../entities/user';

class UserRepository extends BaseRepository<IUser> {
	private static instance: UserRepository;

	private constructor() {
		super(User);
	}

	static getInstance(): UserRepository {
		if (!this.instance) {
			this.instance = new UserRepository();
		}
		return this.instance;
	}

	async findByEmail(email: string): Promise<IUser | null> {
		return this.model.findOne({ email });
	}
}

export default UserRepository;
