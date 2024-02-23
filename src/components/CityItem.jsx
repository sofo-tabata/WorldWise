import { Link } from "react-router-dom";
import styles from "./CityItem.module.css";
import { useCities } from "./contexts/CitiesContext";
import FlagEmoji from "./FlagEmoji";
import { useDeleteCity } from "../hooks/useDeleteCity";

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));

function CityItem({ city }) {
  const { currentCity, setCurrentCity } = useCities();
  const { cityName, emoji, date, id, position } = city;
  const { deleteCity } = useDeleteCity();

  function handleClick(e) {
    e.preventDefault();
    deleteCity(id);
    currentCity.id === id && setCurrentCity({});
  }

  return (
    <li>
      <Link
        className={`${styles.cityItem} ${
          currentCity.id === id ? styles["cityItem--active"] : ""
        }`}
        to={`${id}?lat=${position.lat}&lng=${position.lng}`}
      >
        <FlagEmoji className={styles.emoji}>{emoji}</FlagEmoji>
        <h3 className={styles.name}>{cityName}</h3>
        <time className={styles.date}>{formatDate(date)}</time>
        <button className={styles.deleteBtn} onClick={handleClick}>
          &times;
        </button>
      </Link>
    </li>
  );
}

export default CityItem;
