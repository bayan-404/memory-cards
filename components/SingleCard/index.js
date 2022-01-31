import styles from "./SingleCard.module.css";

function SingleCard({ card }) {
  return (
    <div className={styles.card}>
      <div>
        <img className={styles.cardSide} src={card.src} alt="card front" />
        <div className={styles.cardSide}></div>
      </div>
    </div>
  );
}

export default SingleCard;
