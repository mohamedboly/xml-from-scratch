import express from "express";
import path from "path";

const app = express();
// Le middleware permettra de servir tous les fichiers de ce dossier au client
app.use(express.static("./public"));

app.get("/livres/styles", (req, res) => {
  res.contentType = { "Content-Type": "text/xml" };
  res.sendFile(path.join(process.cwd(), "public", "bibliotheque-style.xml"));
});

app.get("/livres/sans-style", (req, res) => {
  res.sendFile(
    path.join(process.cwd(), "public", "bibliotheque-sans-style.xml")
  );
});
app.get("/livres/references", (req, res) => {
  res.sendFile(path.join(process.cwd(), "public", "references.xml"));
});
app.get("/livres/bibliotheque.xsl", (req, res) => {
  res.sendFile(path.join(process.cwd(), "public", "bibliotheque.xsl"));
});
app.listen(8000, () => {
  console.log("le serveur a démarré");
});
