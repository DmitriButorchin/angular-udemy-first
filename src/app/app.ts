import { Component } from '@angular/core';
import { Header } from "./header";

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [Header]
})
export class App {}
