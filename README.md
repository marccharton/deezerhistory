Deezer History
===============

> Projet de gestion de l'historique Deezer  


Projets Actuels
---------------

### API Deezer/

 - Simple appli express pour la connection à l'api deezer.
 - Useless si utilisation du SDK -- ! Pas possitble SDK car coté client
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

 - X Commencer par fusionner les projets
 - X Contstruire une base propre de projet
 - Reprendre les fonctionnalités de base
 - Reprendre le code de l'API deezer, le token est stocké dans un cookie à l'arrache : changer le fonctionnement
 - Développement de la partie back
 - Test sur un font simple
 - Evolution du Front


### Que garder ?

 - X Tout va passer dans un dossier "OLD/".  
 - X On va partir du projet "Deezer History/" qui était déjà avancé et tout nettoyer.  
 - Récupérer la communication avec la base dans "Route + MOngoDB/"  
 - Récupérer l'accès à l'api deezer de "API deezer/" et du projet "Deezer History/" (qui vient d'ailleurs de "API deezer")
 - Récupérer l'accès aux informations de "API deezer/" et "Deezer History/"
 - On ne va pas utiliser trois milles outils dès maintenant pour ne pas se surcharger. On oubli deja la mise en place de smacs ou meme de sass pour l'instant. On reprend juste le projet front de base et on nettoie le code