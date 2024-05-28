import swaggerUi from 'swagger-ui-express';
import { Application } from 'express';
import swaggerDocument from '../../swagger';

const setupSwagger = (app: Application): void => {
	app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
};

export default setupSwagger;
