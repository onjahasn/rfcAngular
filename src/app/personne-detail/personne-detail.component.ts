import { NgFor, NgIf, UpperCasePipe } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Personne } from '../Personne';


@Component({
  selector: 'app-personne-detail',
  standalone: true,
  imports: [
    NgIf,
    FormsModule,
    UpperCasePipe,
    NgFor
  ],
  templateUrl: './personne-detail.component.html',
  styleUrl: './personne-detail.component.css'
})
export class PersonneDetailComponent {
  @Input() selectedPersonne: Personne = {    // Propriété 'selectedPersonne' qui prend une entrée externe avec le décorateur @Input.
    id: 0, 
    nom: '', 
    prenom: '',
    canaldeContact: [] 
  };
  
    // Événement personnalisé 'updateRequest' avec le décorateur @Output, utilisé pour envoyer des données au composant parent.
  @Output() updateRequest = new EventEmitter<Personne>();
 
  // Méthode pour mettre à jour la personne. Elle émet les détails actuels de 'selectedPersonne' au parent.
  updatePersonne() {
    this.updateRequest.emit(this.selectedPersonne);
  }
  
   // Méthode pour supprimer un canal de contact. Elle prend un index et supprime le canal correspondant de la liste.
  // supprimerContact(index: number) {
  //   this.selectedPersonne!.canaldeContact.splice(index, 1);
  // }
}

