import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({   // Ce décorateur rend la classe DataService injectable ailleurs dans l'application
  providedIn: 'root', //  spécifie qu'une instance unique du service sera disponible dans toute l'application.
})
export class DataService {
  // Injection du service HttpClient par Angular
  constructor(private http: HttpClient) { }   // La clé private indique que http ne sera accessible que depuis cette classe.

  // Méthode pour effectuer une requête GET à l'API spécifiée
  getDonnees() {
    // Renvoie un Observable résultant de la requête GET
    return this.http.get('https://127.0.0.1:8000/rfc/api/personnes');
  }
}

// Les services sont un excellent moyen de partager des informations entre classes qui ne se connaissent pas .