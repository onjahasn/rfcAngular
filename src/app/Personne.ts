export interface Personne {
  id: number;
  nom: string;
  prenom: string;
  canaldeContact: CanalDeContact[];
}
export interface CanalDeContact {
  type: string;
  valeur: string;
  ligne1?: string,
  ligne2?: string,
  ligne3?: string,
  ligne4?: string,
  ligne5?: string,
  ligne6?: string
}
