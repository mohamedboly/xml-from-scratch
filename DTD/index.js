import { Libxml } from "node-libxml";

// Charger le fichier XML et DTD
import fs from "fs";
import path from "path";
import { error } from "console";
let libxml = new Libxml();

let xmlIsWellformed = libxml.loadXml(
  path.join(process.cwd(), "bibliotheque/bibliotheque.xml")
);
if (xmlIsWellformed) {
  console.log(`le document est bien formé`);
} else {
  console.log(`le document est mal formé`);
  libxml.wellformedErrors.forEach((e) => {
    console.log(`Erreur`);
    console.log(e);
  });
}


libxml.loadDtds([path.join(process.cwd(), "bibliotheque/bibliotheque.dtd")]);
let xmlIsValid = libxml.validateAgainstDtds();

if (xmlIsValid) {
  console.log(`Le document est valide`);
} else {
  console.log(`Le document n'est pas valide`);
  for (const key in libxml.validationDtdErrors) {
    console.log(key);
    console.log(libxml.validationDtdErrors[key]);
  }
}
