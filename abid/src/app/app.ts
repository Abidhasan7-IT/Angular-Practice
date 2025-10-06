import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Abid Hasan');
  imageUrl = 'https://res.cloudinary.com/drz65fsga/image/upload/v1757845664/abid_rvhsdr.jpg';
}
