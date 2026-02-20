import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

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
  credenciales = { usuario: '', clave: '' };

  onSubmit(){}

}
