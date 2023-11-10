import fastify from 'fastify';
import fastifyCors from '@fastify/cors';
import { env } from './env';
import { ZodError } from 'zod';
import { toDoRoutes } from './controllers/routes';

export const app = fastify();

app.register(fastifyCors);

app.register(toDoRoutes, {
	prefix: '/to-dos',
});

app.setErrorHandler((err, _, rep) => {
	if (err instanceof ZodError) {
		return rep.status(400).send({
			message: 'Validation error',
			issues: err.format(),
		});
	}

	if (env.NODE_ENV !== 'production') {
		console.error(err);
	}

	return rep.status(500).send({ message: 'Internal server error' });
});
