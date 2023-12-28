import { useGetWeatherData } from "../../utils/api/useGetWeatherData";
import Forcast from "../Forcast/Forcast";
import Card from "../card/Card";
import CircularProgress from "@mui/material/CircularProgress";

function MainInfo() {
  const { isLoading, isError } = useGetWeatherData();

  if (isLoading) return <CircularProgress />;
  if (isError) return <h1>Error</h1>;

  return (
    <>
      <Card />
      <Forcast />
    </>
  );
}

export default MainInfo;
