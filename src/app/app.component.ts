import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { PersonnePhysiqueComponent } from './personne-physique/personne-physique.component';
import { PersonneDetailComponent } from './personne-detail/personne-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet,
    PersonnePhysiqueComponent,
    PersonneDetailComponent,
    HttpClientModule,
    NgxPaginationModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'RFC (Réferenciel Client)';
}
