import { ReactNode } from "react";
import { WeatherContextProvider } from "../context/WeatherContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeContextProvider } from "../context/ThemeContext";

function AppWrapper({ children }: { children: ReactNode }) {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeContextProvider>
        <WeatherContextProvider>{children}</WeatherContextProvider>
      </ThemeContextProvider>
    </QueryClientProvider>
  );
}

export default AppWrapper;
