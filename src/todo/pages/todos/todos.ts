import { Todo } from "todo/todo.interface";

export class Todos {
  heading = "Todos";
  todos: Todo[] = [];
  todoDescription = "";

  addTodo() {
    if (this.todoDescription) {
      this.todos.push({
        description: this.todoDescription,
        done: false,
      });
      this.todoDescription = "";
    }
  }

  removeTodo(todo: Todo) {
    const index = this.todos.indexOf(todo);
    if (index !== -1) {
      this.todos.splice(index, 1);
    }
  }
}
