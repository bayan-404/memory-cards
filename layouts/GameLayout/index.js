import { useState, useEffect } from "react";
import styles from "./game.module.css";
import SingleCard from "../../components/SingleCard";
function GameLayout() {
  const cardIcons = [
    { src: "../../money.png" },
    { src: "../../car.png" },
    { src: "../../devil.png" },
    { src: "../../masculine-user.png" },
    { src: "../../plant.png" },
    { src: "../../shirt.png" },
    { src: "../../book.png" },
    { src: "../../musical-note.png" },
  ];
  const [cards, setCards] = useState([]);

  const shuffleCards = () => {
    const gameCards = [...cardIcons, ...cardIcons]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));
    setCards(gameCards);
  };

  useEffect(() => {
    shuffleCards();
  }, []);

  return (
    <div className={styles.game}>
      <div className={styles.timer}>timer component</div>
      <div className={styles.cardsgrid}>
        {cards.map((card) => (
          <SingleCard key={card.id} card={card} />
        ))}
      </div>
    </div>
  );
}

export default GameLayout;
