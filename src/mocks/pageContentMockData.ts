import type { PageContent } from "../models/types";

export const pageContentMockData: PageContent[] = [
    {
        id: "home",
        pageTitle: "Historique des Jeux Olympiques - TéléSport",
        pageDescription: "Bienvenue sur la page dédiée à l'historique des Jeux Olympiques. Explorez les performances des pays au fil des années.",
        stats: [
            { key: 'totalCountries', label: "Pays participants" },
            { key: 'totalGamesEditions', label: "Éditions des JO" }
        ],
        footnote: "Cliquez sur un pays pour voir ses détails"
    },
    {
        id: "country", 
        pageTitle: "Détails des performances",
        pageDescription: "Bienvenu sur la page dédiée aux statistiques détailées du pays. Explorez leur performances et statistiques au fil des années",
        stats: [
            { key: 'totalParticipations', label: "Participations" },
            { key: 'totalMedals', label: "Total des médailles" },
            { key: 'totalAthletes', label: "Total athlètes"}
        ],
        footnote: "Données des 5 dernières éditions des Jeux Olympiques"

    }
]

export default { pageContentMockData }