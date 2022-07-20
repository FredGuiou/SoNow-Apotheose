#!/bin/bash
#### Création d'une nouvelle révision de la DB avec sqitch ####

##### VARIABLE D'ENV #####

export PGUSER=kjjoanbdqvjdqd

##########################


# Demande à l'user le nom de la révision
read -p "Nom de la révision (ex: *****_r2): " INPUTNAMEREV

# Demande à l'user la note de la révision
read -p "Note de la révision : " INPUTNOTEREV

# Création de la révision
sqitch add $INPUTNAMEREV -n "$INPUTNOTEREV"
