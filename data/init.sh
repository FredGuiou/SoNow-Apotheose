#!/bin/bash
#### VARIABLE D'ENV ####
export PGUSER=kjjoanbdqvjdqd                                            # User de la DB
export PGPORT=5432                                                      # Port de la DB                     
export PGHOST=ec2-54-228-218-84.eu-west-1.compute.amazonaws.com         # Adresse serveur
export ENGINE=pg                                                        # Nom du service utilisé
export SQITCHTARGET=db:pg:$SQITCHNAME                                   # Target pour sqitch
########################


## Création d'un user en DB
# read -p "Quel nom d'user voulez vous donner pour la database ?: " NEWDBUSER
# echo Choississez un mot de passe pour le nouvel utilisateur \'$NEWDBUSER\':
# createuser -l -W $NEWDBUSER

## Création d'une DB avec l'user fraichement créé
# read -p "Quel nom voulez vous donner à la database ?: " NEWDBNAME
# createdb -O $NEWDBUSER $NEWDBNAME

## Init de Sqitch
read -p "Quel nom voulez vous donner à votre projet ?: "  SQITCHNAME
read -p "Dans quel dossier voulez vous initialiser Sqitch ?: "  SQITCHDIR
sqitch init $SQITCHNAME --engine $ENGINE --top-dir $SQITCHDIR

## Config de Sqitch
sqitch config --bool deploy.verify true
sqitch config revert.no_prompt true

## Ajout d'une cible
sqitch target add origin $SQITCHTARGET
sqitch engine add $ENGINE origin

## Ajout d'une migration
read -p "Quel est le nom de la 1ière migration ?: " NAMEMIGRAT
read -p "Quelle note voulez vous inscrire pour '$NAMEMIGRAT' ?: " NAMENOTE
sqitch add $NAMEMIGRAT -n "$NAMENOTE"