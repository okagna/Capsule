// Les capsules des personnes que tu suis.
// Fausses données pour l'instant : plus tard, elles viendront d'un serveur.

const HEURE = 60 * 60 * 1000;
const JOUR = 24 * HEURE;
const maintenant = Date.now();

export const CAPSULES_PARTAGEES = [
  {
    id: '1',
    nom: 'Lucy',
    photo: 'https://i.pravatar.cc/150?img=47',
    miniature: 'https://picsum.photos/seed/lucy/400/400',
    ouverture: maintenant - HEURE, // déjà ouverte depuis 1 h
  },
  {
    id: '2',
    nom: 'Ash',
    photo: 'https://i.pravatar.cc/150?img=12',
    miniature: 'https://picsum.photos/seed/nuage/400/400',
    ouverture: maintenant + 2 * JOUR,
  },
  {
    id: '3',
    nom: 'Kaeleen',
    photo: 'https://i.pravatar.cc/150?img=32',
    miniature: 'https://picsum.photos/seed/ville/400/400',
    ouverture: maintenant + 5 * JOUR,
  },
  {
    id: '4',
    nom: 'Saint',
    photo: 'https://i.pravatar.cc/150?img=15',
    miniature: 'https://picsum.photos/seed/nuit/400/400',
    ouverture: maintenant + 7 * JOUR,
  },
];
