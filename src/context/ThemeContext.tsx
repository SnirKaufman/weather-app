import { ReactNode, createContext, useState } from "react";

const initialValue = {
  theme: "light",
  toggleTheme: () => {},
};

export const ThemeContext = createContext(initialValue);

export function ThemeContextProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState("light");

  function toggleTheme() {
    setTheme((theme) => (theme === "light" ? "dark" : "light"));
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
