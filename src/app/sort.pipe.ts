import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort',
  standalone: true
})
export class SortPipe implements PipeTransform {
  
  transform(personnes: any[], path: string[], order: number): any[] {   // La méthode transform est appelée avec les données à transformer et des arguments supplémentaires.
   
    if (!personnes || !path || !order) return personnes;   // Vérification si n'est pas null, auquel cas retourne les données sans modification.

    // Trie le tableau 'personnes' en place en utilisant une fonction de comparaison.
    return personnes.sort((a: any, b: any) => {
      // Itère sur chaque propriété dans le chemin fourni pour accéder à la valeur de tri souhaitée.
      path.forEach(property => {
        a = a[property];
        b = b[property];
      });

      // Compare les valeurs de 'a' et 'b' selon la propriété choisie.
      
      if (a < b) return -1 * order;  // Si 'order' est positif, effectue un tri croissant, sinon décroissant.
      if (a > b) return 1 * order;
      // Si 'a' et 'b' sont égaux selon la propriété choisie, ils sont considérés égaux dans le tri.
      return 0;
    });
  }
}
