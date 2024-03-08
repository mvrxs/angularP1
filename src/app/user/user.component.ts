import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatTableModule } from '@angular/material/table';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
  category: 'ferrous' | 'non-ferrous'; // Nueva propiedad para categorizar los elementos
}

// Modificamos ELEMENT_DATA con algunos elementos para ilustrar el filtrado
const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H', category: 'non-ferrous' },
  { position: 2, name: 'Iron', weight: 55.845, symbol: 'Fe', category: 'ferrous' },
  { position: 3, name: 'Gold', weight: 196.9665, symbol: 'Au', category: 'non-ferrous' },
  { position: 4, name: 'Copper', weight: 63.546, symbol: 'Cu', category: 'non-ferrous' },
  { position: 5, name: 'Silver', weight: 107.8682, symbol: 'Ag', category: 'non-ferrous' },
  { position: 6, name: 'Nickel', weight: 58.6934, symbol: 'Ni', category: 'non-ferrous' },
  { position: 7, name: 'Zinc', weight: 65.38, symbol: 'Zn', category: 'non-ferrous' },
  { position: 8, name: 'Tin', weight: 118.71, symbol: 'Sn', category: 'non-ferrous' },
  { position: 9, name: 'Lead', weight: 207.2, symbol: 'Pb', category: 'non-ferrous' },
  { position: 10, name: 'Aluminum', weight: 26.9815, symbol: 'Al', category: 'non-ferrous' },
  { position: 11, name: 'Platinum', weight: 195.084, symbol: 'Pt', category: 'non-ferrous' },
  { position: 12, name: 'Uranium', weight: 238.0289, symbol: 'U', category: 'non-ferrous' },
  { position: 13, name: 'Titanium', weight: 47.867, symbol: 'Ti', category: 'non-ferrous' },
  { position: 14, name: 'Cobalt', weight: 58.9332, symbol: 'Co', category: 'non-ferrous' },
  { position: 15, name: 'Chromium', weight: 51.9961, symbol: 'Cr', category: 'non-ferrous' },
  { position: 16, name: 'Manganese', weight: 54.938, symbol: 'Mn', category: 'non-ferrous' },
  { position: 17, name: 'Vanadium', weight: 50.9415, symbol: 'V', category: 'non-ferrous' },
  { position: 18, name: 'Tungsten', weight: 183.84, symbol: 'W', category: 'non-ferrous' },
  { position: 19, name: 'Molybdenum', weight: 95.94, symbol: 'Mo', category: 'non-ferrous' },
  { position: 20, name: 'Beryllium', weight: 9.0122, symbol: 'Be', category: 'non-ferrous' },];

@Component({
    selector: 'app-user',
    styleUrls: ['user.component.css'],
    templateUrl: 'user.component.html',
    standalone: true,
    imports: [HeaderComponent, FooterComponent, MatTableModule]
})
export class UserComponent implements AfterViewInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  filteredDataSource = new MatTableDataSource<PeriodicElement>([]);
  currentColor: string = '';

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.filteredDataSource.paginator = this.paginator;
  }

    filterElementsByColor(color: string) {
    this.currentColor = color;
    if (color === 'green') {
      this.filteredDataSource.data = ELEMENT_DATA.filter(element => element.category === 'ferrous');
    } else if (color === 'red') {
      this.filteredDataSource.data = ELEMENT_DATA.filter(element => element.category === 'non-ferrous');
    } else if (color === 'yellow') {
      this.filteredDataSource.data = ELEMENT_DATA.filter(element => element.category === 'ferrous' || element.category === 'non-ferrous');
    }
  }


  isFerrous(element: PeriodicElement): boolean {
    // Supongamos que un elemento es ferroso si su nombre contiene "Fe" o "Hierro"
    return element.name.toLowerCase().includes('fe') || element.name.toLowerCase().includes('hierro');
  }

  isNonFerrous(element: PeriodicElement): boolean {
    // Supongamos que un elemento es no ferroso si su nombre no contiene "Fe" ni "Hierro"
    return !element.name.toLowerCase().includes('fe') && !element.name.toLowerCase().includes('hierro');
  }
}
