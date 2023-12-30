import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: `<div><h1 class ="bluetext">Marvellous Infosystems</h1>`,
  styles: `
  .bluetext {
    color: blue;
  }
`
})
export class AppComponent {
  title = 'assignment6.3';
}
