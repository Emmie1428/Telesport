# Telesport

Site web permettant de visualiser l'historique des performances aux Jeux Olympiques selon le pays. 
-En phase de développement-

## Techo stack
- **React 19** 
- **TypeScript** 
- **Vite 5** 
- **Tailwind CSS 4** 
- **React Router 6** 
- **Chart.js** 
- **ESLint** 

## Problèmes actuels


- Données codées en dur dans le App.tsx 
    ![Anti-pattern 1](./public/anti-pattern1.PNG)
    Solution: Créer un dossier mock en attendant de dévolopper l'API back-end
- Incohérence avec le nom du ficher et le composant
    -> const Home dans dossier App.tsx
    Solution: Créer une convention de nommage, suivre une logique
- Utilisation de <any>, trop large et incompatible avec Typescript
    Solution: Typer
- Anti-pattern 4  
- Utilisation du Strict Mode, exécute en double
    Solution: Le retirer à la fin de la phase de développement
- Présence de mutiple console.log()
    Solution: Les retirer une fois que la phase de développement est terminée
- Logique métier directement dans le composant
    Solution: Créer une fonction utilitaire /utils/
- Logique d'état de chargement basé sur la l'abscence des données
    ![Anti-pattern 7](./public/anti-pattern7.PNG)
    Solution: Créer des états loading, errors et !data pour différencer les situations
- chartData dans le dossier principal, avec du css et des données en dur (texte)
    Solution: Créer un dossier dédié, 


### Anti-pattern
- Anti-pattern 1 — Données hardcodées dans le composant — idéalement : hook ou module séparé.
- Anti-pattern 2 — Composant incohérent avec le nom du fichier (ex. Home dans App.tsx).
- Anti-pattern 3 — Utilisation de `any` — typer pour garder les bénéfices TypeScript.
- Anti-pattern 4 — useEffect avec logique lourde dans le composant — idéalement : custom hook ou librairie de fetching de données (ex. react-query).
  // De plus en mode développement, le "strict mode" de React est activé, ce qui va éxecuter ce code 2
- Anti-pattern 5 — console.log à retirer.
- Anti-pattern 6 — Logique métier complexe directement dans le composant.
- Anti-pattern 7 — État de chargement dérivé des données au lieu d'un état dédié (loading/error).
- Anti-pattern 8 — Cartes dupliquées — extraire en composant réutilisable (Indicator.tsx). 

- Anti-pattern 9 — Plusieurs composants dans le même fichier — un fichier par composant recommandé.
    // Composant non utilisé pour le moment, mais conservé pour la suite du projet. (Country)
    // eslint-disable-next-line @typescript-eslint/no-unused-vars

- Anti-pattern 10 — Préparation des données du graphique dans le composant — extraire dans une fonction ou un hook pour séparer UI et logique. https://react.dev/learn/thinking-in-react

- Anti-pattern 11 — Routing dans App.tsx — idéalement : module dédié.


Mauvaise division des fichiers, css dans app, data en dur dans app, composants devraient être réutilisables, variable non utilisée (country), tableau chatrs dans app, data en dur dans le composant charts, routing dans app,

Pas de page d'erreur, pas accessible, pas de landmarks (header, footer, etc), manque h2, h3, txt. 
Dossier trop volumineux, diminution du first build
Note bas de page: cliquez sur un pays pour avoir ses détails mais c'est hover

Faire une page d'erreur, screeenshot et explications, faire une page de découpage de projet/doc 
src/app/
  ├── components/  
  ├── pages/  
  ├── hooks/  
  ├── models/  