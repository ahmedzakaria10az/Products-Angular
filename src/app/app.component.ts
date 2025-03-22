import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'demo1';
  showHeader: boolean = true;
  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      const validRoutes = [
        '/',
        '/products',
        '/about',
        '/products/:id',
        '/shop',
        '/shop/:id',
        '/addedit',
        '/addedit/:id',
        '/signup',
      ];
      this.showHeader = validRoutes.includes(this.router.url);
    });
  }
}
