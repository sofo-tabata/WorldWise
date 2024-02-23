import styles from "./CityList.module.css";
import Spinner from "./Spinner.jsx";
import CityItem from "./CityItem.jsx";
import Message from "./Message.jsx";
import { useCitiesQuery } from "../hooks/useCitiesQuery.js";

function CityList() {
  const { cities, isFetchingCities } = useCitiesQuery();
  if (isFetchingCities) return <Spinner />;

  if (!cities.length)
    return <Message message="Add your city by clicking on a city on the map" />;

  return (
    <ul className={styles.cityList}>
      {cities.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
}

export default CityList;
