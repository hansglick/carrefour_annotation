## Application Shiny pour l'annotation d'un dataset de paires de produits

Afin d'évaluer un modèle de comparaison de fiches produits (provenant d'acteurs de la grande distribution), il faut préalablement s'astreindre à la tâche fastidieuse d'annoter les paires, i.e. cette paire représente-t-elle une paire de produits identiques ou pas. En collaboration avec Vincent Gigliobianco : https://fr.linkedin.com/in/vincent-gigliobianco-4b45a9a8

## L'application

L'application permet d'afficher, côte-à-côte, les pages Web d'une paire de produits afin que l'utilisateur puisse l'annoter  efficacement. L'annotation se fait en cliquant sur un des différents boutons radio disponibles. L'utilisateur doit ensuite cliquer sur le bouton SAVE afin de valider son choix. L'information est alors sauvée dans le fichier `saved.rds`. Ce fichier est un dataframe R.

## Initialisation

Pour initialiser une annotation sur un nouveau dataset, il faut au préalable supprimer le fichier `saved.rds` à la racine. Au lancement de l'application un fichier `saved.rds` sera crée et contiendra toutes les annotations rentrées par les utilisateurs.