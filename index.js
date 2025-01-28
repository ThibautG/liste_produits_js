// création de l'objet contenant les produits
const produits = [
    { id: 1, nom: "Thé vert", prix: 12.99 },
    { id: 2, nom: "Café Arabica", prix: 8.99 },
    { id: 3, nom: "Infusion Camomille", prix: 5.49 },
    { id: 4, nom: "Café Robusta", prix: 9.99 },
    { id: 5, nom: "Thé Noir", prix: 7.99 },
];


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
        <td><button type="reset" class="btn">Supprimer</button></td>
      </tr>`
    );
    // insertion dans index.html
    tableau.innerHTML = produitHTML;
};
    // appel de la fonction
affichage(produits);


// affichage du total des prix
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
total.innerHTML = `Votre panier affiche un total de ${totalPrix}€`


// filtrage des produits
recherche.addEventListener("keydown", () => {
    // création d'un tableau vide
    let newProduits = [];
    // utilisation d'un forEach pour observer chaque key "nom" de l'objet produits
    produits.forEach((produit) => {
       if (produit.nom.includes(recherche.value)) {
           // si le key "nom" inclus les caractères présents dans champ recherche
           // on push la ligne correspondante dans l'objet newProduits
           newProduits.push(produit);
       }
    });
    // on appelle la fonction affichage pour modifier le tableau en fonction de notre nouvel objet newProduits
    affichage(newProduits);
});

