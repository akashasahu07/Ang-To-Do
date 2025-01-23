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
  completedTasks: { text: string; completed: boolean }[] = [];

  addTask() {
    if (!this.task_text.trim()) {
      alert('Please Enter a Task Before Adding!');
      return;
    }

    this.tasks.push({ text: this.task_text.trim(), completed: false });
    this.task_text = ''; // Clear the input after adding the task
    
    document.getElementById('input-box')?.focus(); // Set focus back to the input box
  }

  toggleTaskCompletion(index: number) {
    const task = this.tasks[index];
    task.completed = !task.completed;

    if (task.completed) {
      // Move task to completedTasks array
      this.completedTasks.push(task);
      this.tasks.splice(index, 1); // Remove from main tasks list
    }
  }

  deleteTask(index: number) {
    this.tasks.splice(index, 1); // Remove the task at the specified index
  }

  deleteCompletedTask(index: number) {
    this.completedTasks.splice(index, 1); // Remove task from completed tasks list
  }
}