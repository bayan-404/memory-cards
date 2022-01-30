import { useState } from "react";
import styles from "./game.module.css";
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
    let gameCards = [...cardIcons, ...cardIcons]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));
    setCards(gameCards);
  };

  console.log(cards);

  return (
    <div>
      <div onClick={shuffleCards}>timer component</div>
      <div className={styles.cardsgrid}>
        {cards.map((card) => (
          <div className={styles.card} key={card.id}>
            <div>
              <img className={styles.front} src={card.src} alt="card front" />
              <div className={styles.back}></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GameLayout;
// create the page
// timer start counting down
// shows the pictures for 5 sec