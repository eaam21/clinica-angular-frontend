import { MatButtonModule } from '@angular/material/button';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { MatTable, MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';

@Component({
  selector: 'app-inicio',
  imports: [MatIconModule, MatPaginatorModule, MatTableModule, MatIconModule, MatTooltipModule, MatButtonModule, RouterLink],
  templateUrl: './inicio.html',
  styleUrl: './inicio.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Inicio { }
