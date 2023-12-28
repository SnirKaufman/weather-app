import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { cities } from "../../utils/CitiesArray";
import "./input.scss";
import { useContext } from "react";
import { WeatherContext } from "../../context/WeatherContext";

function Input() {
  const { changeChosenCity } = useContext(WeatherContext);

  return (
    <div className="main_info-container">
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={cities}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="City" />}
        onChange={(_, value: any) => {
          changeChosenCity(value);
        }}
      />
    </div>
  );
}

export default Input;
