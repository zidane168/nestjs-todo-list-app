import { HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import CreateTodoDto from './dto/create-todo.dto';
import UpdateTodoDto from './dto/update-todo.dto';
import { Todo } from './entity/todo.entity';

@Injectable()
export class TodosService {

    constructor(
        @InjectRepository(Todo) private todoRepository: Repository<Todo>,
    ) {}
    
    // find all 
    getAllTodos() {
        console.log('here');
        return this.todoRepository.find();
    }

    // find by id 
    async getTodoById (id: number) {
        const todo = await this.todoRepository.findOne({
            where: {
                id: id
            }
        });
        if (todo) {
            return todo;
        }

        throw new HttpException('Todo not found', HttpStatus.NOT_FOUND);
    }

    // create
    async createTodo(todo: CreateTodoDto) {
        const newTodo = await this.todoRepository.create(todo);
        await this.todoRepository.save(newTodo);

        return newTodo;
    }

    // update
    async updateTodo(id: number, post: UpdateTodoDto) {
        await this.todoRepository.update(id, post);
        const updateTodo = await this.todoRepository.findOne({
            where: {
                id: id,
            }
        }) ;
        if (updateTodo) {
            return updateTodo;
        }

        throw new HttpException('Todo not found', HttpStatus.NOT_FOUND);
    }

    // delete
    async deleteTodo(id: number) {
        const deletedTodo = await this.todoRepository.delete(id);
        if (!deletedTodo.affected) {
            //throw new HttpException('Todo not found', HttpStatus.NOT_FOUND);
            throw new NotFoundException;
        }
    }
}
