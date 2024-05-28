const swaggerDefinition = {
	info: {
		title: 'Node ts-boilerplate',
		version: '1.0.0',
		description:
			'Node Typescript ts-boilerplate for Microservices. Skeleton for Node.js Apps written in TypeScript (with Setup Instructions for ESLint, Prettier, and Husky)',
	},
	host: 'localhost:8080',
	basePath: '/v1',
	schemes: ['http', 'https'],
	consumes: ['application/json'],
	produces: ['application/json'],
};

export default swaggerDefinition;
