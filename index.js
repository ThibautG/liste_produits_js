// création de l'objet contenant les produits
const produits = [
    { id: 1, nom: "Thé vert", prix: 12.99 },
    { id: 2, nom: "Café Arabica", prix: 8.99 },
    { id: 3, nom: "Infusion Camomille", prix: 5.49 },
    { id: 4, nom: "Café Robusta", prix: 9.99 },
    { id: 5, nom: "Thé Noir", prix: 7.99 },
];

// création d'une copie de produits via une boucle pour éviter d'avoir un simple clone
// merci Sacha
let produitsModif = [];
for (let i= 0; i < produits.length; i++) {
    produitsModif.push(produits[i]);
};

// création des 4 constantes pour l'affichage dynamique
const recherche = document.getElementById("recherche");
const tableau = document.getElementById("tableau");
const total = document.getElementById("total");
const reset =document.getElementById("reset");


// affichage dynamique du tableau
    // création d'une fonction pour la réutiliser dans le filtrage
let affichage = (objet) => {
    // transformation de l'objet js en html
    const produitHTML = objet.map(produit =>
        `<tr>
        <td>${produit.id}</td>
        <td>${produit.nom}</td>
        <td class="prix">${produit.prix}</td>
        <td><button onclick="supprimerProduit(${produit.id})" type="reset" class="btn">Supprimer</button></td>
      </tr>`
    ).join(""); // utilisation de join pour enlever les virgules
    // insertion dans index.html
    tableau.innerHTML = produitHTML;
};
    // appel de la fonction
affichage(produitsModif);


// affichage du total des prix
    //création de la fonction calculPrix
let calculPrix = () => {
    // récupération des prix affichés en HTML depuis JS
    let prix = document.querySelectorAll(".prix");
    // on crée un tableau vide dans lequel on vient push le contenu HTML présent entre les balises de class "prix"
    let prixTab = [];
    prix.forEach((x) => {
        prixTab.push(Number(x.textContent));
    })
    // calcul du prix total des produits affichés en utilisant reduce
    let totalPrix = prixTab.reduce((acc, v) => acc + v);
    // insertion HTML du résultat dans la div class="total"
    total.innerHTML = `<p>Votre panier affiche un total de ${totalPrix}€</p>`
}
    // appel de la fonction calculPrix
calculPrix();


// filtrage des produits
recherche.addEventListener("input", () => {
    // création d'un tableau vide
    let newProduits = [];
    // utilisation de filter pour n'afficher que les produits contenant les caractères présents dans recherche
    newProduits = produitsModif.filter((produit) => produit.nom.includes(recherche.value)
        || produit.nom.toLowerCase().includes(recherche.value) ); // merci Sacha pour le toLowerCase
    // on appelle la fonction affichage pour modifier le tableau en fonction de notre nouvel objet newProduits
    affichage(newProduits);
    calculPrix();
});



// création fonction supprimer un produit
let supprimerProduit = (id) => {
    // on supprime la ligne dans produitsModifs avec filter => Merci Sacha
    produitsModif = produitsModif.filter(produits => produits.id !== id);
    affichage(produitsModif);
    calculPrix();
};


// Réinitialisation de la liste complète
reset.addEventListener("click", () => {
    recherche.value = "";
    produitsModif = produits;
    affichage(produitsModif);
    calculPrix();
})