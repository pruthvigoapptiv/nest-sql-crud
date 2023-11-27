import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Todo } from "./todos.entity";
import { CreateToDoDto } from "./dtos/create-todo.dto";

@Injectable()
export class TodosService
{
    constructor (@InjectRepository(Todo) private readonly todoRepository:Repository<Todo>)
    {

    }
   async create  (dto:CreateToDoDto)
    {
        const todo = this.todoRepository.create(dto)
        return await  this.todoRepository.save(todo)
    }
}