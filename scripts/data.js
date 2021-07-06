const welcomeMessage = "Bienvenue comboy, veux tu #créer , #afficher , #éditer ou #détruire une affiche ?";

let etiquettes = [];

keywords0 = {
    1: ["créer", "creer", "crer", "créé", "crée", "ajouter"],
    2: ["afficher", "afiché", "affich", "affiché", "montrer"],
    3: ["éditer", "édité", "édite", "editer", "édité"],
    4: ["effacer", "détruire", "enlever", "éffacé", "effacé"]
};

keywords1 = {
    0: ["non","no"],
    5: ["oui", "yes", "ok"]
};

etiquettes[0] = new Etiquette(0, keywords0, "bienvenue", "Bienvenue cow-boy, tu veux #créer , #afficher , #éditer ou #détruire une affiche ?");
etiquettes[1] = new Etiquette(1, keywords1, "create", "créer une affiche ? #oui / #non");
etiquettes[2] = new Etiquette(2, keywords1, "show", "afficher une affiche ? #oui / #non");
etiquettes[3] = new Etiquette(3, keywords1, "edit", "éditer une affiche ? #oui / #non");
etiquettes[4] = new Etiquette(4, keywords1, "delete", "détruire une affiche ? #oui / #non");
etiquettes[5] = new Etiquette(5, keywords0, "welcome", "ok !");