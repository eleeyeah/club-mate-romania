import Image from "next/image";
import styles from "./page.module.css";
import bottles from "public/bottles.png";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item1}>
        <h1 className={styles.title}>
          Energizează-ți Sufletul cu Club-Mate - Savoare și Energie Pusă în Mișcare!
        </h1>
        <p className={styles.description}>
          Creează momente de neuitat cu Club-Mate - savoarea originală ce te
          însoțește în fiecare aventură!
        </p>
        <button className={styles.button}> Find more</button>
      </div>
      <div className={styles.item2}>
        <Image
          src={bottles}
          width={150}
          height={300}
          alt='hero'
          className={styles.img}
        />
      </div>
    </div>
  );
}
