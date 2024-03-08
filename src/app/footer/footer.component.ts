import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})

export class FooterComponent {
  nombreWeb: string = 'Testing angular app';
  copyright: string = '© 2024 Testing angular app. Todos los derechos reservados';
}
