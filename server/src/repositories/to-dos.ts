import { prisma } from '@/lib/prisma';
import { Prisma, ToDo } from '@prisma/client';

export class ToDosRepository {
	async findById(id: string): Promise<ToDo | null> {
		const toDo = await prisma.toDo.findUnique({
			where: {
				id,
			},
		});

		return toDo;
	}

	async create(data: Prisma.ToDoUncheckedCreateInput): Promise<ToDo> {
		const toDo = await prisma.toDo.create({ data });

		return toDo;
	}

	async list(): Promise<ToDo[]> {
		const toDos = await prisma.toDo.findMany();

		return toDos;
	}

	async save(data: ToDo): Promise<ToDo> {
		const toDo = await prisma.toDo.update({
			where: { id: data.id },
			data,
		});

		return toDo;
	}

	async remove(id: string): Promise<void> {
		await prisma.toDo.delete({
			where: {
				id,
			},
		});
	}
}
