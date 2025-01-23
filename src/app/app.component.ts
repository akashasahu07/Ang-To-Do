import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'To-Do';

  task_text: string = '';
  tasks: { text: string; completed: boolean }[] = [];

  addTask() {
    if (!this.task_text.trim()) {
      alert('Please Enter a Task Before Adding!');
      return;
    }

    this.tasks.push({ text: this.task_text.trim(), completed: false });
    this.task_text = ''; // Clear the input after adding the task
  }

  toggleTaskCompletion(index: number) {
    this.tasks[index].completed = !this.tasks[index].completed;
  }

  deleteTask(index: number) {
    this.tasks.splice(index, 1); // Remove the task at the specified index
  }
}