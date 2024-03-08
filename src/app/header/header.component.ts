import { Component, Input, Output, EventEmitter } from '@angular/core';
import { SeccionesComponent } from '../secciones/secciones.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [SeccionesComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Output() colorFilterClicked = new EventEmitter<string>();

  backgroundColor: string = '';

  changeBackgroundColor(color: string) {
    this.backgroundColor = color;
    this.colorFilterClicked.emit(color);
  }
  
}
