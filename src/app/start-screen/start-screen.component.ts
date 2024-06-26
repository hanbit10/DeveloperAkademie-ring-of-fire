import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start-screen',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './start-screen.component.html',
  styleUrl: './start-screen.component.scss',
})
export class StartScreenComponent implements OnInit {
  constructor(private router: Router) {}
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }
  newGame() {
    this.router.navigateByUrl('/game');
  }
}
