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

    // Add a delay before moving the task to the completed list
    setTimeout(() => {
      this.completedTasks.push(task); // Move to the completedTasks array
      this.tasks.splice(index, 1); // Remove from the tasks array
    }, 300); // Delay of 1 second (1000ms)
  }

  deleteTask(index: any) {
    const audio = new Audio('dlt.mp3') //This is for playing audio
    audio.play()

    this.tasks.splice(index, 1); // Remove the task at the specified index
  }

  deleteCompletedTask(index: number) {
    const audio = new Audio('dlt.mp3') //This is for playing audio
    audio.play()
    
    this.completedTasks.splice(index, 1); // Remove task from completed tasks list
  }
}