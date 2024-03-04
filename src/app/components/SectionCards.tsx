import React from "react";
import CardWithTitle from "./CardWithTitle";

interface InfoCardProps {
  title: string;
  description: string;
  image: string;
}

export default function SectionCards() {
  const infoCards: InfoCardProps[] = [
    {
      title: "Parques",
      description: "Description 1",
      image: "/images/plazadearmas.png",
    },
    {
      title: "Emergencias",
      description: "Description 2",
      image: "/images/hospital.png",
    },
    {
      title: "Negocios",
      description: "Description 3",
      image: "/images/mocambo.png",
    },
  ];
  return (
    <div className="w-[70%]  flex justify-between gap-8">
      {infoCards.map((card) => (
        <CardWithTitle
          key={card.title}
          title={card.title}
          description={card.description}
          image={card.image}
        />
      ))}
    </div>
  );
}
