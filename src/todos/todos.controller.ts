import { Body, Controller, Post } from "@nestjs/common";
import { CreateToDoDto } from "./dtos/create-todo.dto";
import { TodosService } from "./todos.service";

@Controller()
export class TodosController{
    constructor(private readonly todosService:TodosService){}

    @Post()
    create(@Body() dto:CreateToDoDto)
    {
        return this.todosService.create(dto)
    }
}