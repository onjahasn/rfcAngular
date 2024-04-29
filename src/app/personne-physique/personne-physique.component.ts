import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgFor, UpperCasePipe } from '@angular/common';
import { Personne } from '../Personne';
import { PersonneDetailComponent } from '../personne-detail/personne-detail.component';
import { SortPipe } from '../sort.pipe';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-personne-physique',
  standalone: true,
  imports: [
    UpperCasePipe,
    NgFor,
    FormsModule,
    HttpClientModule,
    PersonneDetailComponent,
    SortPipe,
    NgxPaginationModule,
  ],
  templateUrl: './personne-physique.component.html',
  styleUrl: './personne-physique.component.css'
})
export class PersonnePhysiqueComponent {

  personnes: Personne[] = [];     // Tableau pour stocker une liste de personnes.
  selectedPersonne?: Personne;
  p: number = 1;
  
  // Constructeur avec injection du service HttpClient pour faire des requêtes HTTP.
  constructor(private http: HttpClient) {   
    this.loadPersonnes();
  }

  // Méthode pour charger les personnes depuis le backend. Elle fait une requête GET.
  loadPersonnes() {
    this.http.get<Personne[]>('https://127.0.0.1:8001/rfc/api/personnes').subscribe((response) => {
      this.personnes = response;
    });
  }

   // Méthode pour sélectionner une personne. Elle est liée à un événement dans l'interface utilisateur.
  onSelect(personne: Personne): void {   
    this.selectedPersonne = personne;
  }

  // Envoie une requête PUT à l'API pour mettre à jour la personne, en utilisant son id dans l'URL.
  updatePersonne(personne: Personne) {
    if (personne && personne.id) {    // Vérifie si l'objet personne est défini et contient un id.
      this.http.put<Personne>(`https://127.0.0.1:8001/rfc/api/personnes/${personne.id}`, personne)
        .subscribe({                  // Démarre l'observation de la requête HTTP, et spécifie des callbacks pour gérer les cas de succès (next) et d'erreur (error).
          next: (updatedPersonne) => {   // Recherche l'index de la personne mise à jour dans un tableau local de personnes, si elle existe.
            const index = this.personnes.findIndex(p => p.id === updatedPersonne.id);
            if (index !== -1) {       // Si la personne existe dans le tableau, elle est mise à jour avec les nouvelles valeurs.
              this.personnes[index] = updatedPersonne;
            }
            console.log('Mise à jour réussie', updatedPersonne);
          },
          error: (error) => {        // En cas d'erreur lors de la requête, le callback error est appelé.
            console.error('Erreur lors de la mise à jour', error);
          }
        });
    }
  }
}
