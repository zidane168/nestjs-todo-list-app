import { Body, Controller, Delete, Get, HttpStatus, Param, Post, Put, Res, UseFilters } from '@nestjs/common';
import CreateTodoDto from './dto/create-todo.dto';
import UpdateTodoDto from './dto/update-todo.dto';
import { TodosService } from './todos.service';

import { Response } from 'express';
import { HttpExceptionFilter } from 'src/filters/http-exception.filter';

@Controller('todos')
export class TodosController {

    constructor(private readonly todosService: TodosService) {

    }

    // get all todos 
    @Get() 
    getAllTodos() {
        return this.todosService.getAllTodos();
    }

    @Get(':id') 
    getTodoById(@Param('id') id:string) {
        return this.todosService.getTodoById(Number(id));
    }

    @Post() 
    @UseFilters(new HttpExceptionFilter())
    async createTodo(
        @Body() todo: CreateTodoDto
    ) {
        return this.todosService.createTodo(todo);
    }

    @Put(':id')
    @UseFilters(new HttpExceptionFilter())
    async updateTodo(
        @Param('id') id: string,
        @Body() todo: UpdateTodoDto
    ) {
        return this.todosService.updateTodo(Number(id), todo);
    }

    //delete 
    @Delete(':id')
    @UseFilters(new HttpExceptionFilter())
    async deleteTodo(
        @Param('id') id: string,
        @Res() res: Response,
    )  {

        const isDeleted = this.todosService.deleteTodo(Number(id));

        let msg = "Deleted failed";
        if (isDeleted) {
            msg = "Deleted succeed";
        }
        return res.status(HttpStatus.OK).json(msg);
        
    }
}
