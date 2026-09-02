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

## Structures des fichers src/

```
  📁 src/
    📁 components/
      └── ChartHeader.tsx (composant réutilisable affichant les titres et stats - dumb)
      └── MedalChart.tsx (composant réutilisable affichant un Pie chart - dumb)
      └── Router.tsx (React router pour la naviguation entre les pages - smart)
    📁 hooks/
      └── useData.ts (useEffect, récupère les données, gère le loading et les erreurs de chargement - smart)
    📁 pages/
      ├── Home.tsx (récupère les données,  cacul des stats et affiche via ChartHeader et MedalChart - smart )
      ├── Country.tsx (page contenant les détails pour chaque pays - à venir- )
    📁 models/
      └── types.ts (définitions des interfaces TypeScript - dumb)
    📁 mocks/
      └── olympicsMockDatas.ts (données mocks sur les pays en attendant la back-end)
      └── pageContentMockDatas.ts (données mocks sur les titres et types de stats selon la page en attendant la back-end)
    App.tsx
    main.tsx
    index.css

```


