import styles from "./CardStatus.module.css";

export default function CardStatus({ icon, counter, text }) {
  return (
    <div className={styles.card}>
      <div className={styles.con}>
        
        <div className={styles.icon}>
          <i className={icon}></i>
        </div>

        <div className={styles.info}>
          <span className={styles.counter}>{counter}</span>
          <span className={styles.text}>{text}</span>
        </div>

      </div>
    </div>
  );
}