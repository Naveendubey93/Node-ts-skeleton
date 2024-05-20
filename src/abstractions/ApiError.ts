export interface IError {
	statusCode: number;
	// fields: {
	// 	name: {
	// 		message: string;
	// 	};
	// };
	message: string;
	name: string;
}

class ApiError extends Error implements IError {
	public statusCode = 500;

	public success = false;

	public fields!: { name: { message: string } };

	constructor(msg: string, statusCode: number, name: string = 'ApiError') {
		super(msg);
		this.message = msg;
		this.statusCode = statusCode;
		this.name = name;
		// this.fields = { name: { message: msg || '' } }; // Initialize with a default value
	}
}

export default ApiError;
