import { Component, OnInit } from '@angular/core';
import { Todo } from "./../../models/Todo";

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: Todo[] = [];

  inputTodo:string = '';

  constructor() { }

  ngOnInit(): void {
    this.todos = [{
      content: 'First Todo',
      completed: false
    },
    {
      content: 'Second Todo',
      completed: false
    }
    ]
  }

  toggleDone (id: number) {
    this.todos.map( (todo, index) => {
      if (index === id) todo.completed = !todo.completed;
      return todo;
    })

  }

  deleteTodo (id: number) {
    this.todos = this.todos.filter( (todo, index) => {
      return index !== id;
    })
  }

  addTodo () {
    if (this.inputTodo === '') return

    this.todos.push({
      content: this.inputTodo,
      completed:false
    });

    this.inputTodo = '';
  }

}
