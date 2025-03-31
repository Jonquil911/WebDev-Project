import { Component, ElementRef, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgClass, NgFor } from '@angular/common';

export interface TodoItem {
  id: number;
  task: string;
  completed: boolean;
}


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet,NgFor,NgClass]
})
export class AppComponent {

  todoList: TodoItem[] = [];
    newTask: string = '';
    @ViewChild('todoText') todoInputRef: ElementRef<HTMLInputElement> = null!;

    ngOnInit(): void {
      const storedTodoList = this.todoList;
    //   if (storedTodoList) {
    //       this.todoList = JSON.parse(storedTodoList);
    //   }
  }
  addTask(text: string): void {
    if (text.trim() !== '') {
        const newTodoItem: TodoItem = {
            id: Date.now(),
            task: text.trim(),
            completed: false
        };
        this.todoList.push(newTodoItem);
        this.todoInputRef.nativeElement.value = '';
        this.saveTodoList();
    }
}

deleteTask(id: number): void {
    this.todoList = this.todoList.filter(item => item.id !== id);
    this.saveTodoList();
}

toggleCompleted(id: number): void {
    const todoItem = this.todoList.find(item => item.id === id);
    if (todoItem) {
        todoItem.completed = !todoItem.completed;
        this.saveTodoList();
    }
}

saveTodoList(): void {
    // localStorage.setItem('todoList', JSON.stringify(this.todoList));

}


}