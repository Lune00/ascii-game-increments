# Configuration starter Typescript

Un projet starter Typescript, avec un eslint configuré, test unitaires avec Jest

## Commandes utiles

## npx

npx allows us to run packages without having to install them globally

## Compilation

### Compiler un fichier

`npx tsc src/index.ts`

### Compiler tous les fichiers 

Par défaut, le compilateur `tsc` regarde dans le dossier `.src/`

`npx tsc` 

### Watch les sources

`npx tsc -w` 

## Eslint : Lint manuel

`eslint --ext ts,tsx src/*`


## Tests avec Jest

installer `jest` (config `jest --init`), le transformer `@ts-jest`

# Liens

## Starter
https://www.digitalocean.com/community/tutorials/typescript-new-project
https://gitlab.com/javamind/typescript-starter/-/blob/master/jest.config.js

## Eslint
https://thesoreon.com/blog/how-to-set-up-eslint-with-typescript-in-vs-code

## Jest et Typescript
https://basarat.gitbook.io/typescript/intro-1/jest
