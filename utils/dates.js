// Petites fonctions pour calculer et afficher les dates des capsules

const HEURE = 60 * 60 * 1000; // une heure en millisecondes
const JOUR = 24 * HEURE;

const JOURS = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
const MOIS = ['janv.', 'févr.', 'mars', 'avr.', 'mai', 'juin', 'juil.', 'août', 'sept.', 'oct.', 'nov.', 'déc.'];

// Renvoie la date d'ouverture (en millisecondes) à partir de la durée choisie
export function calculerOuverture(duree) {
  const maintenant = Date.now();
  if (duree === '48 h') return maintenant + 48 * HEURE;
  if (duree === '7 j') return maintenant + 7 * JOUR;
  if (duree === '1 mois') {
    const d = new Date();
    d.setMonth(d.getMonth() + 1);
    return d.getTime();
  }
  return maintenant;
}

// true si la date d'ouverture est passée
export function estOuverte(ouverture) {
  return ouverture <= Date.now();
}

// "Dans 5 h", "Dans 3 jours" ou "Ouverte"
export function tempsRestant(ouverture) {
  const reste = ouverture - Date.now();
  if (reste <= 0) return 'Ouverte';
  if (reste < 48 * HEURE) {
    const heures = Math.ceil(reste / HEURE);
    return heures <= 1 ? "Dans moins d'1 h" : `Dans ${heures} h`;
  }
  return `Dans ${Math.ceil(reste / JOUR)} jours`;
}

// "Lundi 16 nov."
export function formaterDate(ouverture) {
  const d = new Date(ouverture);
  return `${JOURS[d.getDay()]} ${d.getDate()} ${MOIS[d.getMonth()]}`;
}
