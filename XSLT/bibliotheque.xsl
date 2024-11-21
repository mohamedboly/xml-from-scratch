<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:output method="html" encoding="UTF-8" />
  
  <xsl:template match="/">
    <html>
      <head>
        <title>Liste des Livres</title>
      </head>
      <body>
        <h2>Bibliothèque</h2>
        <ul>
          <xsl:apply-templates select="bibliotheque/livre" />
        </ul>
      </body>
    </html>
  </xsl:template>

  <xsl:template match="livre">
    <li>
      <strong><xsl:value-of select="titre" /></strong> -
      <em><xsl:value-of select="auteur" /></em> (<xsl:value-of select="annee" />)
    </li>
  </xsl:template>
</xsl:stylesheet>
