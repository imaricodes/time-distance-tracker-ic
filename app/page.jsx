import Image from "next/image";
import styles from "./page.module.css";

export const metadata = {
  title: "Home Page",
};

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Time Distance Tracker</h1>
    </main>
  );
}
