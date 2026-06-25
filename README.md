# Schréder — Refonte du site (wireframe)

Maquette **wireframe (mi-fidélité)** de la homepage Schréder.
Principe : **même contenu que la page actuelle**, mais une **présentation modernisée**.
Objectif : valider la structure et le parcours avant le design final (couleurs de
marque, typographies, visuels).

## Deux versions

- **`index.html` — V2 « marketing-optimisée »** : applique les recommandations de l'audit
  (proposition de valeur, preuve, parcours par besoin, études de cas chiffrées, CTA clair).
  Chaque section porte une note bleue indiquant le problème corrigé (visible quand les
  annotations sont ON).
- **`faithful.html` — V1 « fidèle »** : reprend le contenu/ordre de la page actuelle, en
  présentation modernisée. Conservée pour comparaison.

Un bouton flottant en bas à gauche permet de **basculer V1 ⇄ V2**.

## Aperçu

- `index.html` — la homepage (V2)
- `css/styles.css` — styles (palette neutre wireframe, responsive)
- `js/main.js` — interactions (toggle annotations, scroll portfolio, barre pays, menu mobile placeholder)
- `.github/workflows/deploy-pages.yml` — déploiement de la maquette sur GitHub Pages

> L'audit marketing de la homepage est conservé comme livrable hors-dépôt (non versionné ici).

Ouvrir `index.html` dans un navigateur. Le bouton en bas à droite
**« Annotations : ON/OFF »** masque/affiche les repères de wireframe.

## Parti pris

- **Mi-fidélité, monochrome** : on raisonne structure et hiérarchie, pas esthétique.
  Les visuels sont des placeholders ; la couleur de marque viendra ensuite.
- **Même contenu, autre présentation** : les bandes image+texte alternées remplacent les
  cartes posées sur l'image ; le portfolio devient une rangée scrollable ; etc.
- **Header en placeholder** : volontairement non traité (méga-menu dans une itération dédiée).

## Structure de la homepage (contenu réel)

| # | Section | Contenu |
|---|---------|---------|
| — | Barre pays | « Choose your country… » |
| — | Header | Solutions, Products, Services, Sustainability, Projects, Insights (placeholder) |
| 01 | Hero | *Sustainable & Smart Lighting Solutions* + Contact us / Discover our solutions |
| 02 | In the Spotlight | Campagne SENSE ONE + actu acquisition EdgeMachines |
| 03 | What's New? | BRITELINE (sport), ALTARA (off-grid), TFLEX GEN2 (tunnels) |
| 04 | Feature — Transport Hubs | Segment transport + CTA |
| 05 | Portfolio | Poles & Brackets, Smart Poles, Control Systems, Solar, Retrofit |
| 06 | Feature — Preserving Ecosystems | Éclairage éco-responsable / dark-sky |
| 07 | Local contact | « Connect with your local contact » + Choose your country |
| — | Footer | 4 colonnes + réseaux + mentions légales |

## Prochaines étapes possibles

1. Appliquer les recommandations de l'audit marketing.
2. Identité visuelle (couleurs Schréder, typographies, iconographie).
3. Header / méga-menu.
4. Intégration de vrais visuels et contenus.
