import { ToDosRepository } from '@/repositories/to-dos';
import { ToDo } from '@prisma/client';

interface CreateToDoRequest {
	title: string;
	description: string;
	completed: boolean;
}

interface CreateToDoResponse {
	toDo: ToDo;
}

export class CreateToDo {
	constructor(private toDosRepository: ToDosRepository) {}

	async execute({
		title,
		description,
		completed,
	}: CreateToDoRequest): Promise<CreateToDoResponse> {
		const toDo = await this.toDosRepository.create({
			title,
			description,
			completed,
		});

		return { toDo };
	}
}
