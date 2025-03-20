const express = require('express');
const app = express();
const port = 3300;

let counter = 0;  // Valeur partagée entre tous les utilisateurs

app.use(express.json());
app.use(express.static('public'));  // Servir les fichiers statiques dans le dossier "public"

// Récupérer la valeur actuelle du compteur
app.get('/counter', (req, res) => {
  res.json({ counter });
});

// Incrémenter le compteur
app.post('/counter/increment', (req, res) => {Q
  counter++;
  res.json({ counter });
});

app.listen(port, () => {
  console.log(`Serveur démarré sur le port ${port}`);
});
