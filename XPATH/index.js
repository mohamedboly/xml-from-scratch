const parser = new DOMParser();
const xmlDoc = parser.parseFromString(
  `
  <bibliotheque>
    <livre categorie="fiction">
      <titre>Le Petit Prince</titre>
      <auteur>Antoine de Saint-Exupéry</auteur>
      <annee>1943</annee>
    </livre>
    <livre categorie="science-fiction">
      <titre>1984</titre>
      <auteur>George Orwell</auteur>
      <annee>1949</annee>
    </livre>
    <livre categorie="aventure">
      <titre>Les Trois Mousquetaires</titre>
      <auteur>Alexandre Dumas</auteur>
      <annee>1844</annee>
    </livre>
  </bibliotheque>`,
  "application/xml"
);

// Utilisation d'XPath pour sélectionner tous les titres de livres
const result = xmlDoc.evaluate(
  "//titre",
  xmlDoc,
  null,
  XPathResult.ANY_TYPE,
  null
);
let node = result.iterateNext();

while (node) {
  console.log(node.textContent); // Affiche chaque titre de livre
  node = result.iterateNext();
}
