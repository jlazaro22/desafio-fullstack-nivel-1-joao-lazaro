import { ToDosRepository } from '@/repositories/to-dos';
import { GetToDos } from '@/services/get-to-dos';
import { FastifyReply, FastifyRequest } from 'fastify';

export async function list(req: FastifyRequest, rep: FastifyReply) {
	try {
		const toDosRepository = new ToDosRepository();
		const getToDosService = new GetToDos(toDosRepository);
		const toDos = await getToDosService.execute();

		return toDos;
	} catch (err) {
		throw err;
	}
}
