import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-secciones',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './secciones.component.html',
  styleUrl: './secciones.component.css'
})
export class SeccionesComponent {

  @Input() backgroundColor: string = '';

}
