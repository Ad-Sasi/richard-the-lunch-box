# The Lunch Box — décisions de design

Ce fichier existe pour que les prochaines pages (jus, food-truck) soient cohérentes
sans avoir à redécider. Tout est dans `assets/css/site.css`.

## Le monde visuel

**Le repas sur feuille de bananier.** Richard vient du sud de l'Inde, et une lunch box,
c'est un thali portable. C'est de là que vient la palette : le crème du riz, le vert
de la feuille, le jaune du curcuma, le rouge du piment. Pas de mandala, pas de
dégradé orange générique.

La direction éditoriale (fond crème, grande typo serif, la photo qui porte la page)
a été choisie par le client parmi trois pistes. On la garde, mais dans sa version
tenue : une seule couleur d'action, un seul motif, des aplats francs.

## Couleurs

| Jeton | Valeur | Rôle |
|---|---|---|
| `--paper` / `--paper-deep` / `--paper-edge` | `#F7F1E4` `#EFE5D2` `#E0D2B6` | fonds, alternance de bandeaux, filets |
| `--ink` / `--ink-soft` | `#17200F` `#46503C` | texte. L'encre n'est jamais noire, le secondaire n'est jamais gris |
| `--leaf` / `--leaf-deep` | `#2C5530` `#1B3A1E` | la couleur de marque, qui porte des sections entières |
| `--turmeric` / `--turmeric-up` | `#E3A008` `#F0C05A` | aplats et pastilles / la même teinte éclaircie pour le texte sur vert |
| `--chili` / `--chili-deep` | `#A82B18` `#7E1E0F` | **la seule couleur d'action.** Un bouton rouge = commander |

Règle : le curcuma ne sert jamais de texte courant sur crème (2:1). Sur le vert,
utiliser `--turmeric-up`, jamais `--turmeric` (3,8:1 contre 5,1:1).

Tous les couples texte/fond du site ont été mesurés et passent le seuil AA
(4,5:1 pour le texte courant, 3:1 pour les grands titres).

## Typographie

- **Young Serif** — titres uniquement. Une seule graisse : la hiérarchie vient de
  la taille, jamais du gras.
- **Archivo** — tout le reste (400/500/600/700).

Fraunces, Cormorant, Playfair et DM Sans sont volontairement écartées : ce sont
les serif que tous les modèles proposent par défaut, y compris dans le prototype
d'origine. Young Serif a les formes épaisses et chaleureuses qui vont à la cuisine.

Échelle fluide en `clamp()` : `.t-hero` `.t-sect` `.t-item` `.t-quote`.
Le titre plafonne à 6rem et court sur toute la largeur — c'est la manchette.

## Règles tenues

- **Une seule couleur d'action.** Si un bouton est rouge, il déclenche une commande.
- **Un seul motif** (`.blockprint`) et une seule fonction : marquer le haut du
  bandeau horaires. Jamais en papier peint.
- **Pas d'emoji.** Les icônes sont dessinées en SVG, même graisse de trait (1,8),
  dans un `<defs>` en haut du HTML.
- **Pas de surtitre** au-dessus d'un titre. Le titre se porte tout seul.
- **Pas de cartes à bordure colorée ni d'ombres portées dures.** Les ombres ont un
  décalage et un flou (`--lift`, `--lift-lg`).
- **La signalétique végé / non-végé** est le carré à point indien, pas une pastille
  inventée.
- Les surfaces du navigateur (sélection, curseur, anneau de focus, barre de
  défilement) sont teintées depuis la palette.

## Le moment vivant

La pastille d'ouverture calcule en direct, à l'heure de Paris, si Richard cuisine —
et sinon quand il recuisine. La ligne du jour est marquée dans le tableau
des horaires. Sans JavaScript, la pastille affiche les jours de service : rien ne casse.

## Ajouter une page (jus, food-truck)

1. Copier `index.html`, garder l'en-tête, le pied et la barre d'appel.
2. `<html lang="fr" data-brand="jus">` — ou `truck`. La couleur de marque change,
   tout le reste est hérité.
3. Ajuster `[data-brand="…"]` en fin de `site.css` si la teinte doit bouger.

Rien d'autre à réécrire.

**`food-truck.html`** utilise `data-brand="truck"` : le violet (`--truck` /
`--truck-deep`, jetons fixes en tête de `site.css`) remplace `--brand` sur
cette page, pour qu'elle se distingue au premier coup d'œil du point fixe —
même Richard, mais une activité qu'on identifie vite. Les liens croisés entre
les deux pages (`.nav--truck` sur « Le camion », `.nav--leaf` sur « Le point
fixe ») reprennent la couleur *fixe* de la page visée plutôt que `--brand` de
la page courante, pour qu'on la reconnaisse avant même de cliquer.

## Mise à jour du 14 octobre 2026

- **Plus de beige** : Richard n'aime pas le beige. Le fond passe en blanc chaud
  (`--paper: #FFFDFB`), la couleur vient des aplats de marque.
- **Rue de la Montagne et la carte : rose rani** (`--rani: #B8135F`), bandeau d'accueil
  plein (`.splash`). Le vert feuille et le violet du camion sont abandonnés.
- **Traiteur & food truck : jaune camionnette** (`data-brand="jaune"`), règles
  déplacées de la page vers la fin de `site.css`.
- **Les jus : indigo** (`data-brand="jus"`), le cadre des étiquettes ; chaque jus a
  sa section dans la couleur de son étiquette (`.juice--amour`, `--coeur`, `--cleaner`).
- **Une seule couleur d'action par page** : `--action` (rani, encre sur jaune, indigo).
  Sur un aplat de marque, le bouton plein s'inverse en blanc.
- **Le menu liste les pages**, plus les ancres : quatre pages, visibles aussi sur
  téléphone (deuxième ligne, intitulés raccourcis sous 34rem).
- **Logo NK** découpé de la photo du camion : `assets/img/logo-nk.jpg`, favicons
  `favicon.ico`, `favicon-48.png`, `apple-touch-icon.png`.
