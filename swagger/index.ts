import { merge } from 'lodash';
import swaggerDefinition from './swaggerDefinition';
import userSwagger from '../src/components/user/user.swagger.json';
import systemStatusSwagger from '../src/components/system-status/systemStatus.swagger.json';

const combinedSwagger = merge(
	{
		paths: {},
		definitions: {},
	},
	userSwagger,
	systemStatusSwagger,
);

const finalSwaggerDocument = {
	swagger: '2.0',
	...swaggerDefinition,
	paths: combinedSwagger.paths,
	definitions: combinedSwagger.definitions,
	tags: [
		// ...(swaggerDefinition.tags || []),
		...(userSwagger.tags || []),
		...(systemStatusSwagger.tags || []),
	],
};

export default finalSwaggerDocument;
