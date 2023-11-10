import { ToDosRepository } from '@/repositories/to-dos';
import { ResourceNotFoundError } from './errors/resource-not-found-error';

interface RemoveToDoRequest {
	toDoId: string;
}

export class RemoveToDo {
	constructor(private toDosRepository: ToDosRepository) {}

	async execute({ toDoId }: RemoveToDoRequest): Promise<void> {
		const toDo = await this.toDosRepository.findById(toDoId);

		if (!toDo) {
			throw new ResourceNotFoundError();
		}

		await this.toDosRepository.remove(toDoId);
	}
}
