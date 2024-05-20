import mongoose, { Document, Schema } from 'mongoose';

// interface UserDoc extends Document, Omit<UserData, 'id'> {}

export interface IUser extends Document {
	id: string | number; // Optional for MongoDB since it uses _id
	name: string;
	password: string;
	email: string;
	age: number;
}

const UserSchema: Schema<IUser> = new Schema(
	{
		name: { type: String, required: true },
		email: { type: String, required: true, unique: true },
		password: { type: String, required: true },
		age: { type: Number, required: true },
	},
	{ timestamps: true },
);
UserSchema.index({ email: 1 }, { unique: true });

const User = mongoose.model<IUser>('User', UserSchema);

export default User;
