import App from "./App";
import { Route, Routes } from "react-router-dom";
export const RoutesData = () => {
  return (
    <Routes>
      <Route index element={<App />} />
    </Routes>
  );
};
