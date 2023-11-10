import { ToDosRepository } from '@/repositories/to-dos';
import { ToDo } from '@prisma/client';
import { ResourceNotFoundError } from './errors/resource-not-found-error';

interface UpdateToDoRequest {
	toDoId: string;
	title: string;
	description: string;
	completed: boolean;
}

interface UpdateToDoResponse {
	toDo: ToDo;
}

export class UpdateToDo {
	constructor(private toDosRepository: ToDosRepository) {}

	async execute({
		toDoId,
		title,
		description,
		completed,
	}: UpdateToDoRequest): Promise<UpdateToDoResponse> {
		const toDo = await this.toDosRepository.findById(toDoId);

		if (!toDo) {
			throw new ResourceNotFoundError();
		}

		const toDoData = {
			toDo: {
				...toDo,
				title: title,
				description: description,
				completed: completed,
			},
		};

		return toDoData;
	}
}
