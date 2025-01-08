import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = "fenne's portfolio";
  python: string = 'assets/images/python.png';
  html: string = 'assets/images/html.png';
  css: string = 'assets/images/css.png';
  js: string = 'assets/images/javascript.png';
  csharp: string = 'assets/images/csharp.png';

}

