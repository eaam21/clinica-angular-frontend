import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  imports: [],
  template: `<p>logout works!</p>`,
  styleUrl: './logout.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class Logout  implements OnInit{
  private router = inject(Router);
  ngOnInit(): void {
    sessionStorage.removeItem("token");
    this.router.navigate(['/']);
  }
}