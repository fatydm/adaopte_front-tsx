"use client";

import Banner from "./components/Banner";
import AnimalsHomePage from "./components/AnimalsHomePage";
import QuestionsArea from "./components/QuestionsArea";
import LastQuestion from "./components/LastQuestion";
import Button from "./components/UI/Button";

import DonationButton from "./components/UI/DonationButton";
import AdoptButton from "./components/UI/AdoptButton";

import { Amatic_SC } from "next/font/google";
import BeVolunteerButton from "./components/UI/BeVolunteerButton";
const amatic = Amatic_SC({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-amatic",
});

export default function Home() {
  const cardsContent = [
    {
      title: "🔎",
      subtitle: "1. Trouver votre compagnon",
      paragraph:
        "Parcourez notre base de données d'animaux disponibles et utilisez nos filtres pour trouver celuiqui correspond à votre mode de vie.",
    },
    {
      title: "📝",
      subtitle: "2. Remplissez une demande",
      paragraph:
        "Soumttez votre formulaire d'adoption pour l'animal qui vous intéresse. Nous examinerons chaque demande avec soin.",
    },
    {
      title: "👋🏾",
      subtitle: "3. Rencontrez l'animal",
      paragraph:
        "Visitez le refuge pour rencontrer l'animal et voir si vous êtes compatible. C'est une étape essentielle du processus.",
    },
    {
      title: "🏠",
      subtitle: "4. Bienvenue à la maison",
      paragraph:
        "Une fois votre demande approuvée, vous pouvez accueillir votre nouvel.le ami.e chez vous. Nous restons disponibles pour vous conseiller.",
    },
  ];

  return (
    <>
      <div className="relative">
        <Banner
          src="/assets/background.jpg"
          alt="image bannière"
          title="Donnons-leur autant qu'ils nous apportent"
          paragraph="Chaque jour, des milliers d'animaux attendent une famille aimante. Trouvez votre compagnon idéal parmi nos animaux disponibles à l'adoption."
        />
      </div>

      <AnimalsHomePage />

      <QuestionsArea
        title="Comment ça marche ?"
        subtitle="Adopter un animal est un engagement sérieux et à long terme. Voici votre processus en quelques étapes simples. "
        cards={cardsContent}
      />

      <LastQuestion
        title="Prêt.e à changer une vie ?"
        subtitle="Adoptez, partagez,soutenez... Chaque geste compte. Que vous ouvriez votre foyer ou votre coeur, vous pouvez offrir une seconde chance à un animal abandonné."
      >
        <AdoptButton />
        <DonationButton />
        <BeVolunteerButton />
      </LastQuestion>
    </>
  );
}
