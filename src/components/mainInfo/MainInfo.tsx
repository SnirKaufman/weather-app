import { useGetWeatherData } from "../../utils/api/useGetWeatherData";
import Card from "../card/Card";
import Forcast from "../forcast/Forcast";
import CircularProgress from "@mui/material/CircularProgress";

function MainInfo() {
  const weatherData = useGetWeatherData();
  const { isLoading, isError } = weatherData;

  if (isLoading) return <CircularProgress />;
  if (isError) return <h1>Error</h1>;

  const { data = {} } = weatherData;
  const { current, daily } = data;

  return (
    <>
      <Card cardData={current} />
      <Forcast forcastData={daily} />
    </>
  );
}

export default MainInfo;
