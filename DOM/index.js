// Imaginons que le XML est déjà chargé dans la variable xmlDoc
let xmlString = `
<personnes>
  <personne id="1">
    <nom>Mohamed Coulibaly</nom>
    <age>26</age>
  </personne>
  <personne id="2">
    <nom>Mansour Ndiaye</nom>
    <age>25</age>
  </personne>
</personnes>`;

let parser = new DOMParser();
let xmlDoc = parser.parseFromString(xmlString, "application/xml");

// Accéder à un élément
let nom = xmlDoc.getElementsByTagName("nom")[0].childNodes[0].nodeValue;
console.log(nom);

// Ajouter un nouvel élément
let newPersonne = xmlDoc.createElement("personne");
newPersonne.setAttribute("id", "3");
let newNom = xmlDoc.createElement("nom");
newNom.appendChild(xmlDoc.createTextNode("Amadou Diop"));
newPersonne.appendChild(newNom);
xmlDoc.getElementsByTagName("personnes")[0].appendChild(newPersonne);

// Voir le résultat mis à jour
console.log(new XMLSerializer().serializeToString(xmlDoc));
