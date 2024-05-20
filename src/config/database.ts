import mongoose, { ConnectOptions } from 'mongoose';
import 'dotenv/config';
import logger from '../lib/logger';

// dotenv.config();
const { NODE_ENV, DB_HOST, DB_USER, DB_PASSWORD, DB_NAME } = process.env;

// Ensure these variables are always strings
const dbHost = DB_HOST || 'localhost';
const dbUser = DB_USER || '';
const dbPassword = DB_PASSWORD || '';
const dbName = DB_NAME || 'skeleton1'; // Provide a default database name if needed

logger.info(dbHost, dbUser, dbPassword, dbName);

let DB_CONNECTION_STRING: string;

if (dbUser && dbPassword) {
	DB_CONNECTION_STRING = `mongodb://${dbUser}:${dbPassword}@${dbHost}:27017/${dbName}`;
} else {
	DB_CONNECTION_STRING = `mongodb://${dbHost}:27017/${dbName}`;
}
const mongooseOptions: ConnectOptions = {
	autoIndex: NODE_ENV === 'development',
};

// mongoose
// 	.connect(mongoUrl, mongooseOptions)
// 	.then(() => {
// 		logger.info('Connect3q d to MongoDB');
// 	})
// 	.catch((err) => {
// 		logger.error('Error connecting to MongoDB:', err);
// 		process.exit(1);
// 	});

const connectDB = async () => {
	try {
		await mongoose.connect(DB_CONNECTION_STRING, mongooseOptions);
		logger.info('Connected to MongoDB');
		logger.info(DB_CONNECTION_STRING);
		logger.info(process.env);
	} catch (error) {
		logger.error('Error connecting to MongoDB:', error);
		process.exit(1);
	}
};

export default connectDB;

// export default mongoose;
