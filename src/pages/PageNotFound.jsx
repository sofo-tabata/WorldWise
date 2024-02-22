import styles from "./PageNotFound.module.css";

export default function PageNotFound() {
  return (
    <div className={styles.error}>
      <h1>Page not found 😢</h1>
    </div>
  );
}
