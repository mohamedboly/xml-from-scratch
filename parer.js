// Texte XML à analyser
const xmlString = `
<books>
  <book>
    <title>Le Petit Prince</title>
    <author>Antoine de Saint-Exupéry</author>
    <year>1943</year>
  </book>
  <book>
    <title>Un autre titre</title>
    <author>George Orwell</author>
    <year>1949</year>
  </book>
</books>
`;

// Création d'un DOMParser pour analyser le texte XML
const parser = new DOMParser();
const xmlDoc = parser.parseFromString(xmlString, "application/xml");

// Récupération des éléments "book"
const books = xmlDoc.getElementsByTagName("book");

const bibliotheque = document.getElementById("bibliotheque");

for (let i = 0; i < books.length; i++) {
  const title = books[i].getElementsByTagName("title")[0].textContent;
  const author = books[i].getElementsByTagName("author")[0].textContent;
  const year = books[i].getElementsByTagName("year")[0].textContent;

  let div = document.createElement("div");
  const infoLivre = `titre : ${title} - auteur : ${author} - annee : ${year}`;
  div.textContent = infoLivre;
  bibliotheque.appendChild(div);
  const hr = document.createElement("hr");
  bibliotheque.appendChild(hr);

  console.log(`titre: ${title}`);
  console.log(`Auteur: ${author}`);
  console.log(`Annee: ${year}`);
}
