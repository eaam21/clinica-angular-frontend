import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { UsuarioService } from '../services/UsuarioService';
import { LoginOutput } from '../model/Usuario';
import { Router } from '@angular/router';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  imports: [
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    MatIconModule
  ],
  templateUrl: './login.html',
  styleUrl: './login.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Login { 
  credenciales = { nombreUsuario: '', claveUsuario: '' };
    private usuarioService = inject(UsuarioService);
    private router = inject(Router);
    private snackBar = inject(MatSnackBar);
    horizontalPosition: MatSnackBarHorizontalPosition = 'right';
    verticalPosition: MatSnackBarVerticalPosition = 'top';

  onSubmit(){
    this.usuarioService.login(this.credenciales).subscribe({
      next:(response:LoginOutput)=>{
        if(response.success){
          sessionStorage.setItem("token", response.data);
          console.log(response)
          console.log("Login correcto!")
          this.router.navigate(['/inicio']);
        }else{
          console.log("Login incorrecto")
          this.openSnackBarLoginIncorrecto(response.mensaje);
        }
      },
      error:(err)=>{
        console.error('Login failed', err);
      }
    })
  }

  openSnackBarLoginIncorrecto(mensaje:string) {
    this.snackBar.open(mensaje, 'OK', {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration:4000
    });
  }
}
