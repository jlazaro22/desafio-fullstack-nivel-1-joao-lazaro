import { ToDosRepository } from '@/repositories/to-dos';
import { UpdateToDo } from '@/services/update-to-do';
import { FastifyReply, FastifyRequest } from 'fastify';
import z from 'zod';

export async function update(req: FastifyRequest, rep: FastifyReply) {
	const updateToDoParamsSchema = z.object({
		toDoId: z.string().cuid(),
	});

	const updateToDoBodySchema = z.object({
		title: z.string(),
		description: z.string(),
		completed: z.boolean().default(false),
	});

	const { toDoId } = updateToDoParamsSchema.parse(req.params);
	const { title, description, completed } = updateToDoBodySchema.parse(
		req.body
	);

	try {
		const toDosRepository = new ToDosRepository();
		const createToDoService = new UpdateToDo(toDosRepository);
		await createToDoService.execute({
			toDoId,
			title,
			description,
			completed,
		});
	} catch (err) {
		throw err;
	}
}
