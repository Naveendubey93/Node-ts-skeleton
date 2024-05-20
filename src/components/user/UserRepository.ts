import BaseRepository from '../../abstractions/BaseRepository';
import User, { IUser } from '../../entities/user';

class UserRepository extends BaseRepository<IUser> {
	constructor() {
		super(User);
	}

	async findByEmail(email: string): Promise<IUser | null> {
		return this.model.findOne({ email });
	}
}

export default UserRepository;
