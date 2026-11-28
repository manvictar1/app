# Gestion des absences et retards

Application web installable (PWA) : absences matin/après-midi, retards en minutes, rapports Excel/PDF, sauvegarde JSON. Données stockées localement (IndexedDB).

## Déploiement sur GitHub Pages
1. Créez un dépôt GitHub et déposez tous les fichiers de ce dossier à la racine.
2. Settings → Pages → Branch `main`, dossier `/ (root)` → Save.
3. L’adresse `https://VOTRE-NOM.github.io/NOM-DU-DEPOT/` est disponible en HTTPS après 1–2 minutes.

## Installation
- **PC (Chrome/Edge)** : icône « Installer » dans la barre d’adresse, ou bouton « Installer l’application » du menu.
- **Android (Chrome)** : menu ⋮ → « Installer l’application ».
- **iPhone/iPad (Safari)** : Partager → « Sur l’écran d’accueil ».

Ouvrez l’application une première fois avec Internet : les bibliothèques (Excel, graphiques) et la police sont alors mises en cache pour le mode hors ligne.

## Règles de calcul
- 1 absence matin ou après-midi = 0,5 jour.
- Retards cumulés : 8 h = 1 jour. Total jours = jours d’absence + jours de retard.

## Sauvegarde
Données et sauvegardes → « Sauvegarde JSON », à déposer dans le dépôt si vous le souhaitez. Les données sont propres à chaque appareil : utilisez la sauvegarde pour les transférer.

## Mise à jour
Modifiez `index.html`, puis changez `VERSION` dans `sw.js`.

## Sauvegarde GitHub (optionnelle)
Données et sauvegarde → « Sauvegarde GitHub ». Créez un dépôt **privé** séparé et un token *fine-grained* limité à ce dépôt, permission **Contents : Read and write**. Le token est saisi dans l’application et stocké uniquement dans le navigateur ; il n’est jamais dans le code ni dans les fichiers JSON. Utilisez un appareil de confiance et effacez le token au besoin (bouton « Effacer le token »).

Chaque sauvegarde GitHub crée un fichier `sauvegarde-AAAA-MM-JJ_HH-MM.json` dans le dossier choisi (par défaut `backups`). La restauration propose la liste des dates.

## Synchronisation entre appareils
Le bouton **Synchroniser** (Données et sauvegarde) fusionne les 5 dernières sauvegardes GitHub avec les données locales (la modification la plus récente gagne, les suppressions sont propagées), puis envoie le résultat. Ce n’est pas du temps réel : synchronisez en fin de journée et à l’ouverture sur l’autre appareil.

## Calendrier scolaire
Jours de repos hebdomadaires + jours fériés/vacances (saisie ou import Excel : colonnes *Début, Fin, Libellé*). Ces jours ne sont pas comptés dans les totaux.

## Langue et PDF
Bascule Français/Arabe (bouton en bas de la barre latérale). Le PDF est généré directement avec le logo (à choisir dans Données) ; il nécessite Internet la première fois pour charger les bibliothèques.

## Synchronisation automatique
Avec « Synchronisation automatique » cochée : à l’ouverture, au retour sur l’application, toutes les 3 minutes, et 15 s après chaque modification. Chaque appareil écrit son propre fichier `sauvegarde-AAAA-MM-JJ_<appareil>.json` (un par jour) et fusionne les fichiers des autres. Il faut configurer le token sur chaque téléphone.

## Appel : matin / après-midi
Le jour même, l’appel affiche seulement le matin avant la fin du matin (12:00 par défaut), seulement l’après-midi à partir de 13:00, et une pause entre les deux. Heures réglables dans Données et sauvegarde ; bouton « Tout afficher » pour tout voir. Les autres dates affichent toujours les deux sessions.

## Cantine
1. *Classes et élèves* : cochez 🍽 pour chaque élève inscrit à la cantine.
2. *Données et sauvegarde → Réglages de la cantine* : activer l’onglet, jours de cantine, prix du repas (facultatif), absence automatique si absent le matin.
3. Onglet *Cantine* : choisissez la date, un clic sur « Repas pris / Absent », récapitulatif mensuel (Excel / impression). Par défaut un élève inscrit est compté présent à la cantine les jours de cantine. Les réglages sont propres à chaque appareil ; l’inscription et les absences cantine sont synchronisées.
