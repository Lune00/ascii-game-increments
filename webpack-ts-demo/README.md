# Webpack starter TypeScript

Un projet starter avec webpack et TypeScript

## Intro

Webpack est un bundler: il compile les assets (js,ts, css, img ...) vers un code optimisé et minifié prêt à être embarqué. En définissant les dépendances entres modules de manière explicite, webpack peut construire un graphe de dépendances et générer un package optimisé où les deps sont faites dans le bon ordre. 

Webpack "transpile" le code pour être compatible avec les anciens navigateurs;

## Générer le bundle

Par défaut

`npx webpack`

It will take our script at `src/index.js` as the entry point, and will generate `dist/main.js` as the output

## Fichier de config : webpack.config.js

Configuration de l'entrée, de la sortie

Pour générer le bundle en utilisant le fichier de configuration

`npx webpack --config webpack.config.js`

Par défaut le runner `webpack`, s'il détecte un fichier de configuration, va implicitement le charger. Mais on peut le spécifier si on a une configuration plus complexe.

## Build sans npx

On ajoute un script au package.json `build: "wepback"`. Ensuite `npm run build`

## Webpack + Typescript

## Doc

https://webpack.js.org/guides/getting-started/