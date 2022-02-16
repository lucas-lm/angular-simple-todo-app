import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-app';
  toDoList: string[] = []

  addNew(inputForm: HTMLInputElement) {
    const { value } = inputForm
    if (value) this.toDoList.push(value)
    inputForm.value = ''
  }
}
