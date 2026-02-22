import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatDialogRef, MatDialogContent, MatDialogActions } from '@angular/material/dialog';
@Component({
  selector: 'app-confirmar-dialog',
  imports: [MatDialogContent, MatDialogActions],
  templateUrl: `./ConfirmarDialog.html`,
  styleUrl: './ConfirmarDialog.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ConfirmarDialog { 
  private dialogRef = inject(MatDialogRef<ConfirmarDialog>);

  confirmar(): void {
    this.dialogRef.close(true);
  }

  cancelar(): void {
    this.dialogRef.close(false);
  }

}
