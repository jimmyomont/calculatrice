// Récupère toutes les touches de la calculatrice et stocke leurs codes dans une liste
const touches = [...document.querySelectorAll('.bouton')];
const listeKeyCode = touches.map(touche => touche.dataset.key); 

// Récupère l'écran de la calculatrice
const ecran = document.querySelector('.ecran');

// Ajoute un écouteur d'événements pour détecter les frappes de clavier
document.addEventListener('keydown', (e) => {
    // Récupère la valeur de la touche pressée
    const valeur = e.target.dataset.key; 
    // Appelle la fonction de calcul avec cette valeur
    calculer(valeur);
});

// Ajoute un écouteur d'événements pour détecter les clics sur les touches de la calculatrice
document.addEventListener('click', (e) => {
    // Récupère la valeur de la touche cliquée
    const valeur = e.target.dataset.key; 
    // Appelle la fonction de calcul avec cette valeur
    calculer(valeur);
});

// Fonction qui calcule la valeur à afficher sur l'écran de la calculatrice
const calculer = (valeur) => {
    // Vérifie si la valeur est présente dans la liste des codes de touches de la calculatrice
    if (listeKeyCode.includes(valeur)) {
        // Si la valeur correspond à la touche "C", efface l'écran
        switch (valeur) {
            case '8' :
                ecran.textContent="";
                break;
            // Si la valeur correspond à la touche "=", évalue l'expression mathématique affichée à l'écran et affiche le résultat
            case '13' :
                // Utilise la fonction "Function" pour évaluer l'expression mathématique en sécurité
                const calcul = Function('"use strict";return (' + ecran.textContent + ')')();
                // Affiche le résultat sur l'écran
                ecran.textContent = calcul; 
                break;
            // Si la valeur correspond à une autre touche, ajoute la valeur de cette touche à l'expression mathématique affichée sur l'écran
            default : 
                // Trouve l'index de la touche correspondante dans la liste des codes de touches de la calculatrice
                const indexKeycode = listeKeyCode.indexOf(valeur);
                // Récupère la touche correspondante
                const touche = touches[indexKeycode];
                // Ajoute la valeur de la touche à l'expression mathématique affichée sur l'écran
                ecran.textContent += touche.innerHTML; 
        }
    }
    return;
};
