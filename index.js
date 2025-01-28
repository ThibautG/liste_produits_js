// création de l'objet contenant les produits
const produits = [
    { id: 1, nom: "Thé vert", prix: 12.99 },
    { id: 2, nom: "Café Arabica", prix: 8.99 },
    { id: 3, nom: "Infusion Camomille", prix: 5.49 },
    { id: 4, nom: "Café Robusta", prix: 9.99 },
    { id: 5, nom: "Thé Noir", prix: 7.99 },
];

// création des 3 constantes pour l'affichage dynamique
const recherche = document.getElementById("recherche");
const tableau = document.getElementById("tableau");
const total = document.getElementById("total");
const reset =document.getElementById("reset");

// affichage dynamique du tableau
// transformation de l'objet js en html
const produitHTML = produits.map(produit =>
    `<tr>
            <td>${produit.id}</td>
            <td>${produit.nom}</td>
            <td>${produit.prix}</td>
            <td><button type="reset">Supprimer</button></td>
        </tr>`
);
console.log(produitHTML);
// insertion dans l'index.html
tableau.innerHTML = produitHTML;
