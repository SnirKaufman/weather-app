import "./App.scss";
import Header from "./components/header/Header";
import Input from "./components/input/Input";
import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";
import MainInfo from "./components/mainInfo/MainInfo";

function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="app" id={theme}>
      <Header />
      <Input />
      <MainInfo />
    </div>
  );
}

export default App;
