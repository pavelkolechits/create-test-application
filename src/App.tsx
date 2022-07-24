import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import { HomePage } from "./pages/HomePage/HomePage";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { UserPage } from "./pages/UserPage/UserPage";
import { TestPage } from "./pages/TestPage";

import "./App.scss";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/:user" element={<UserPage />} />
        <Route path="/test" element={<TestPage />} />
      </Route>
    </Routes>
  );
};
