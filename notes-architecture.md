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

## Problèmes actuels et solutions

### Anti-pattern 1
**Problème**
Données codées en dur dans le App.tsx

![Anti-pattern 1](./public/anti-pattern1.PNG)

**Solution proposée**
Créer un dossier mock en attendant de développer l'API back-end

---

### Anti-pattern 2
**Problème**
Incohérence avec le nom du fichier et le composant, const Home dans dossier App.tsx

![Anti-pattern 2](./public/anti-pattern2.PNG)

**Solution proposée**
Créer une convention de nommage, suivre une logique

---

### Anti-pattern 3
**Problème**
Utilisation de `any`, trop large et incompatible avec TypeScript

![Anti-pattern 3](./public/anti-pattern3.PNG)

**Solution proposée**
Typer correctement les données et états

---

### Anti-pattern 4
**Problème**
useEffect avec logique lourde dans le composant

**Solution proposée**
Créer un custom hook

---

### Anti-pattern 5
**Problème**
Présence de multiple console.log()

**Solution proposée**
Les retirer une fois que la phase de développement est terminée

---

### Anti-pattern 6
**Problème**
Logique métier directement dans le composant

![Anti-pattern 6](./public/anti-pattern6.PNG)

**Solution proposée**
Créer une fonction utilitaire dans /utils/

---

### Anti-pattern 7
**Problème**
Logique d'état de chargement basée sur l'absence des données

**Image**
![Anti-pattern 7](./public/anti-pattern7.PNG)

**Solution proposée**
Créer des états loading, errors et !data pour différencier les situations

---

### Anti-pattern 8
**Problème**
Cartes dupliquées dans chartOptions

![Anti-pattern 8](./public/anti-pattern8.PNG)

**Solution proposée**
Créer un composant réutilisable

---

### Anti-pattern 9
**Problème**
Composant avec variable non-utilisée (Country), plusieurs composants dans le même fichier

![Anti-pattern 9](./public/anti-pattern9.PNG)

**Solution proposée**
Séparer dans une autre page, garder en commentaire

---

### Anti-pattern 10
**Problème**
Préparation des données du graphique dans le composant

![Anti-pattern 9](./public/anti-pattern9.PNG)

**Solution proposée**
Extraire dans une fonction ou un hook pour séparer UI et logique

---

### Anti-pattern 11
**Problème**
Présence du routing dans le dossier App.tsx

**Solution proposée**
Mettre dans un fichier à part

---

### Anti-pattern 12
**Problème**
Pas de gestion d'erreur

**Solution proposée**
Ajouter des messages d'erreurs et créer une page 404

---

### Anti-pattern 13
**Problème**
Pas de landmarks clairs

![Anti-pattern 13](./public/anti-pattern13.PNG)

**Solution proposée**
Créer un header, footer, nav et une logique dans les h1, h2, text, etc

---

### Anti-pattern 14
**Problème**
Note de bas de page indique "cliquez sur un pays pour avoir ses détails" alors que pas d'événement au clic

![Anti-pattern 14](./public/anti-pattern14.PNG)

**Solution proposée**
Aligner le texte aux actions possibles, ne pas afficher si actions en cours de développement




Faire une page d'erreur, screeenshot et explications, faire une page de découpage de projet/doc 
src/app/
  ├── components/  
  ├── pages/  
  ├── hooks/  
  ├── models/  





  📁 src/
  📁 assets/
  📁 components/
    ├── Indicator.tsx
    └── ChartComponent.tsx
  📁 hooks/
    └── useOlympicsData.ts
  📁 pages/
    ├── Home.tsx
    ├── Country.tsx
    └── NotFound.tsx
  📁 types/
    └── olympics.ts
  📁 utils/
    └── olympicsCalculations.ts
  📁 mock/
    └── olympicsData.ts
  📁 router/
    └── routes.tsx
  App.tsx
  main.tsx