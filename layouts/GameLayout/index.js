import { useState, useEffect } from "react";
import styles from "./game.module.css";
import SingleCard from "../../components/SingleCard";
function GameLayout() {
  const cardIcons = [
    { src: "../../icons/money.png" },
    { src: "../../icons/car.png" },
    { src: "../../icons/devil.png" },
    { src: "../../icons/masculine-user.png" },
    { src: "../../icons/plant.png" },
    { src: "../../icons/shirt.png" },
    { src: "../../icons/book.png" },
    { src: "../../icons/musical-note.png" },
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
