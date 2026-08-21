// Anti-pattern 1 — Données hardcodées dans le composant — idéalement : hook ou module séparé.

// Anti-pattern 2 — Composant incohérent avec le nom du fichier (ex. Home dans App.tsx).

// Anti-pattern 3 — Utilisation de `any` — typer pour garder les bénéfices TypeScript.

// Anti-pattern 4 — useEffect avec logique lourde dans le composant — idéalement : custom hook ou librairie de fetching de données (ex. react-query).
  // De plus en mode développement, le "strict mode" de React est activé, ce qui va éxecuter ce code 2

// Anti-pattern 5 — console.log à retirer.

// Anti-pattern 6 — Logique métier complexe directement dans le composant.

// Anti-pattern 7 — État de chargement dérivé des données au lieu d'un état dédié (loading/error).

// Anti-pattern 8 — Cartes dupliquées — extraire en composant réutilisable (Indicator.tsx). 

// Anti-pattern 9 — Plusieurs composants dans le même fichier — un fichier par composant recommandé.
    // Composant non utilisé pour le moment, mais conservé pour la suite du projet. (Country)
    // eslint-disable-next-line @typescript-eslint/no-unused-vars

// Anti-pattern 10 — Préparation des données du graphique dans le composant — extraire dans une fonction ou un hook pour séparer UI et logique. https://react.dev/learn/thinking-in-react

// Anti-pattern 11 — Routing dans App.tsx — idéalement : module dédié.


Mauvaise division des fichiers, css dans app, tailwind utilisé??, data en dur dans app, composants devraient être réutilisables, variable non utilisée (country), tableau chatrs dans app, data en dur dans le composant charts, routing dans app,

Pas de page d'erreur, pas accessible, pas de landmarks (header, footer, etc), manque h2, h3, txt. 
Dossier trop volumineux, diminution du first build
Note bas de page: cliquez sur un pays pour avoir ses détails mais c'est hover

Faire une page d'erreur, screeenshot et explications, faire une page de découpage de projet/doc 
src/app/
  ├── components/  
  ├── pages/  
  ├── hooks/  
  ├── models/  