# The Lunch Box — site

Site vitrine de **The Lunch Box**, la cuisine indienne de Richard Balaraj,
2 rue de la Montagne, 44100 Nantes.

## Comment c'est fait

HTML et CSS, rien d'autre. Pas de build, pas de framework, pas de dépendance à
installer. On ouvre `index.html` dans un navigateur et ça marche.

```
index.html            le point fixe, 2 rue de la Montagne
food-truck.html       le camion
assets/css/site.css   toute la feuille de style (jetons + composants partagés)
assets/img/           les photos (à remplir)
DESIGN.md             les décisions de design, à lire avant d'ajouter une page
prototype/            les 3 pistes visuelles de départ, gardées pour mémoire
```

Hébergeable tel quel sur GitHub Pages, gratuitement, sans nom de domaine.

## Pourquoi pas de WordPress ni de plugins

Tout ce qu'un plugin ferait est déjà là, en HTML natif :

- **la carte** — un `<iframe>` OpenStreetMap, sans clé API, sans cookie, donc sans
  bandeau RGPD à afficher ;
- **la fiche Google** — une balise JSON-LD `Restaurant` dans le `<head>` : c'est elle
  qui donne à Google les horaires, le prix, la cuisine et la position ;
- **la commande** — des liens `tel:` et `wa.me` natifs, plus une barre d'appel fixe
  en bas d'écran sur téléphone ;
- **les horaires en direct** — 60 lignes de JavaScript sans dépendance.

Aucun script tiers, aucun traceur : il n'y a rien à faire accepter au visiteur.

## Ce qu'il reste à faire

**Les photos.** Cinq emplacements attendent un fichier. Chacun est marqué dans
`index.html` par un commentaire `REMPLACER PAR` juste au-dessus, avec la balise
`<img>` déjà écrite :

| Fichier attendu | Où | Format |
|---|---|---|
| `assets/img/lunchbox.jpg` | accueil | portrait 4:5 |
| `assets/img/biryani.jpg` | la carte | paysage 3:2 |
| `assets/img/dal-makhani.jpg` | la carte | paysage 3:2 |
| `assets/img/curry-agneau.jpg` | la carte | paysage 3:2 |
| `assets/img/richard.jpg` | portrait | carré 1:1 |

Viser 1600 px de large maximum et moins de 300 Ko par photo.

En attendant, les emplacements affichent un cadre assumé qui dit ce qui manque —
personne ne peut le confondre avec un vrai plat.

**À vérifier avec Richard**

- Le numéro 06 65 75 77 18 est-il bien joignable sur WhatsApp ? Trois liens en
  dépendent. Sinon, ils se retirent en deux minutes.
- Une photo pour l'aperçu des partages (Facebook, WhatsApp) : la balise
  `og:image` est en commentaire dans le `<head>`, en attente.

## Développement

Pas de serveur nécessaire pour lire la page. Pour la servir en local :

```bash
python3 -m http.server 4321
```
