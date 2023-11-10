import { ToDosRepository } from '@/repositories/to-dos';
import { ToDo } from '@prisma/client';

interface GetToDosResponse {
	toDos: ToDo[] | null;
}

export class GetToDos {
	constructor(private toDosRepository: ToDosRepository) {}

	async execute(): Promise<GetToDosResponse> {
		const toDos = await this.toDosRepository.list();

		return { toDos };
	}
}
