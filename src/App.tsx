import "./App.scss";
import Header from "./components/header/Header";
import Input from "./components/input/Input";
import Card from "./components/card/Card";
import { useContext } from "react";
import { ThemeContext } from "./context/ThemeContext";

function App() {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="app" id={theme}>
      <Header />
      <Input />
      <Card />
    </div>
  );
}

export default App;
