import { ReactNode } from "react";
import { WeatherContextProvider } from "../context/context";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

function AppWrapper({ children }: { children: ReactNode }) {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <WeatherContextProvider>{children}</WeatherContextProvider>
    </QueryClientProvider>
  );
}

export default AppWrapper;
