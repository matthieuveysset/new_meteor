#Cours de dev Nodejs / MeteorJs

## Installation de meteor
sur meteor.com --> la doc

Pour les systemes basés sur unix
curl https://install.meteor.com/ sh

Pour rappel : curl permet d'appeler des systemes
Typyquement de appels url

Pour microsoft, il faut installer chocolatey qui permet de 
"compiler" meteor
Install de chocolatey : htpps://chocolatey.org/install
choco install meteor

Chocolatey se charge de l'nstall de meteor et des paquets

## Lancement d'un nouveau projet 
meteor --help
meteor create --bare pascherpascher

meteor create --react NOM_app
meteor create NOM_APP

## Instalation de paquets de base
### react
npm i react react-dom react-router react-router-dom

react: coule de source
react-dom: paquet qui permet a react de manipuler le dom d'une page 
react-router: permet de créer les routes de l'appli
react-router-dom: tout les composants react pour gerer les routes 
par ex: Route, Switch, BrowserRouter...

### Système de gestion des utilisateurs 
Ce systeme est preparé et gere pas meteor avec le paquet account-password

Pour l'installer: 
meteor add account-password

Ce paquet des basé sur account-base, qui est le coeur de système utilisateur de meteor.
Vous pouvez aussi utiliser d'autres methodes d'authentification :
- Pour facebook : account-facebook
- Pour google : account-google
- Pour twitter : account-twitter

Ce paquet permet de créer des comptes utilisateurs coté client e coté serveur la commande suivante :
Accounts.createUser({
    email: "bob@yopmail.com",
    password: "changme",
    profile: {TOUT LES DATA QUE VOUS VOULEZ },
    callback: () => {FONCTION APRES LA CREATION DU USER}

})

Ensutie vous pouvez connecter l'utilisateur avec Meteor.loginWithPassword(email, password, () => {} )

Deconnecter l'utilisateur avec: 
Meteor.logout()