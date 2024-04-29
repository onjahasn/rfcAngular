import { Routes } from '@angular/router';
import { PersonnePhysiqueComponent } from './personne-physique/personne-physique.component';

export const routes: Routes = [
  { path:'', redirectTo: '/personne-physique', pathMatch: 'full' },//route par defaut
  { path: 'personne-physique', component: PersonnePhysiqueComponent },
];
