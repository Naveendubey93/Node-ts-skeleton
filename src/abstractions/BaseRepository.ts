import mongoose from 'mongoose';

class BaseRepository<T extends mongoose.Document> {
	protected model: mongoose.Model<T>;

	constructor(model: mongoose.Model<T>) {
		this.model = model;
	}

	async create(data: Partial<T>): Promise<T> {
		return this.model.create(data);
	}

	async findById(id: string): Promise<T | null> {
		return this.model.findById(id);
	}

	async findAll(): Promise<T[]> {
		return this.model.find();
	}

	async update(id: string, data: Partial<T>): Promise<T | null> {
		return this.model.findByIdAndUpdate(id, data, { new: true });
	}

	async delete(id: string): Promise<T | null> {
		return this.model.findByIdAndDelete(id);
	}
}

export default BaseRepository;
