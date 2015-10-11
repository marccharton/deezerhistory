Deezer History
===============

> Projet de gestion de l'historique Deezer  


Projets Actuels
---------------

### API Deezer/

 - Simple appli express pour la connection à l'api deezer.
 - Useless si utilisation du SDK
 - Permet de voir vite fait comment se connecter avec OAuth à deezer et récupération du token
 - Récupération des informations de l'utilisateur
 - Récupération des 50 dernières chansons utilisées depuis l'api deezer


### Deezer History/  

 - Est censé être le projet remis à plat
 - Code sale car à l'époque peu de bonne pratiques acquise
 - Repartir de ce projet là pour ne pas tout reprendre à zéro


### Route + MongoDB/  

 - Permet la récupération de data en base mongoDB


Projet Final
------------

### Que doit faire le projet ?

L'idée est de construire un petit site permettant d'afficher son historique deezer et de farfouiller dans ce dernier.  
  
Fonctionnalités présentes : 
 - Une liste des dernières chansons écoutées.
 - Des informations sous forme de graphiques sur ce qui a été écouté : le plus écouté, les chansons du moment, du soir, etc.
 - Une barre de recherche donnant la possibilité de filtrer son contenu.
 - Possibilité d'écouter les chansons listées.
 - Chaque données deezer devrait être un lien vers sa page deezer (titre, album, artiste etc).
 - Les données sont stockées en base et sont synchronisés avec les données en ligne.


### A faire

 - Commencer par fusionner les projets
 - Contstruire une base propre de projet


### Que garder ?

 - Tout va passer dans un dossier OLD/.  
 - On va partir du projet "Deezer History/" qui était déjà avancé et tout nettoyer.  
 - Récupérer la communication avec la base dans "Route + MOngoDB"  
 - 