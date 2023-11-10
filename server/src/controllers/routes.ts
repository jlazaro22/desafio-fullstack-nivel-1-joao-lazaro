import { create } from '@/controllers/create';
import { list } from '@/controllers/list';
import { FastifyInstance } from 'fastify';
import { update } from './update';
import { remove } from './remove';

export async function toDoRoutes(app: FastifyInstance) {
	app.post('/', create);
	app.post('/update/:toDoId', update);
	app.delete('/delete/:toDoId', remove);
	app.get('/', list);
}
