import { ToDosRepository } from '@/repositories/to-dos';
import { RemoveToDo } from '@/services/remove-to-do';
import { FastifyReply, FastifyRequest } from 'fastify';
import z from 'zod';

export async function remove(req: FastifyRequest, rep: FastifyReply) {
	const removeToDoParamsSchema = z.object({
		toDoId: z.string().cuid(),
	});

	const { toDoId } = removeToDoParamsSchema.parse(req.params);

	try {
		const toDosRepository = new ToDosRepository();
		const removeToDoService = new RemoveToDo(toDosRepository);
		await removeToDoService.execute({
			toDoId,
		});
	} catch (err) {
		throw err;
	}
}
