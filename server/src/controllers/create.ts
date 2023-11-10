import { ToDosRepository } from '@/repositories/to-dos';
import { CreateToDo } from '@/services/create-to-do';
import { FastifyReply, FastifyRequest } from 'fastify';
import z from 'zod';

export async function create(req: FastifyRequest, rep: FastifyReply) {
	const createToDoBodySchema = z.object({
		title: z.string(),
		description: z.string(),
		completed: z.boolean().default(false),
	});

	const { title, description, completed } = createToDoBodySchema.parse(
		req.body
	);

	try {
		const toDosRepository = new ToDosRepository();
		const createToDoService = new CreateToDo(toDosRepository);
		await createToDoService.execute({
			title,
			description,
			completed,
		});
	} catch (err) {
		throw err;
	}
}
