import DarkModeButton from "../darkModeButton/darkModeButton";
import "./Header.scss";

export default function Header() {
  return (
    <header className="header-container">
      <h1 className="h1">Mecki Weather Site</h1>
      <DarkModeButton />
    </header>
  );
}
