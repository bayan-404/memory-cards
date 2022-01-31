import styles from "./SingleCard.module.css";

function SingleCard({ card }) {
  return (
    <div className={styles.card}>
      <div>
        <img className={styles.front} src={card.src} alt="card front" />
        <div className={styles.back}></div>
      </div>
    </div>
  );
}

export default SingleCard;
