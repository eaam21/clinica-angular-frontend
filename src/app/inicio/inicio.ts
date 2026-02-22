import { MatButtonModule } from '@angular/material/button';
import { ChangeDetectionStrategy, Component, inject, ViewChild } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { MatTable, MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { PacienteService } from '../services/PacienteService';
import { Paciente } from '../model/Paciente';
import { JwtDecoderService } from '../services/JwtDecoderService';

@Component({
  selector: 'app-inicio',
  imports: [MatIconModule, MatPaginatorModule, MatTableModule, MatIconModule, MatTooltipModule, MatButtonModule, RouterLink],
  templateUrl: './inicio.html',
  styleUrl: './inicio.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Inicio {
    private pacienteService = inject(PacienteService);
    private jwtDecoder = inject(JwtDecoderService);
    displayedColumns: string[] = ['idPaciente', 'apellidoPaterno', 'apellidoMaterno', 'nombres', 'dni', 'imc', 'acciones'];
    @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
    @ViewChild(MatTable,{static:true}) table!: MatTable<any>;
    dataSource:any;
    decodedToken:any

    ngOnInit(): void {
      this.decodedToken = this.jwtDecoder.decodeToken()
      this.listar();
    }


    listar(){
      this.pacienteService.listar().subscribe(
        (pacientes)=>{
                  console.log("--------")
        console.log(pacientes)
        console.log("--------")
          this.dataSource = new MatTableDataSource<Paciente>(pacientes)
          this.dataSource.paginator=this.paginator
        }
      )
    }

 }
