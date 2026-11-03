import { Component, signal, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  imports: [RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App implements OnInit {
  protected readonly title = signal('td3');

  constructor(){
    console.log('App component initialized with title:', this.title());
  }

  ngOnInit(): void{
    console.log('App component OnInit lifecycle hook called.');
  }
}
