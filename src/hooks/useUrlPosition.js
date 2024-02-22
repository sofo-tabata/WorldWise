import { useSearchParams } from "react-router-dom";

function convertLatAndLng(value) {
  while (value < -180) {
    value += 360;
  }
  while (value > 180) {
    value -= 360;
  }
  return value;
}

export function useUrlPosition() {
  const [searchParams] = useSearchParams();
  const lat = convertLatAndLng(searchParams.get("lat"));
  const lng = convertLatAndLng(searchParams.get("lng"));
  return [lat, lng];
}
