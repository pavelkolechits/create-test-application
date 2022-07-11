import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import { HomePage } from "./pages/HomePage/HomePage";
import { LoginPage } from "./pages/LoginPage/LoginPage";

import "./App.scss";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
      </Route>
    </Routes>
  );
};
{/* <Routes> */}
{/* <Route path="/" element={<Layout />}>
  <Route index element={<HomePage />} />
  <Route path="/test/:id" element={<Test/>}/>
  <Route path="/create-test" element={<CreateTestPage />} />
  <Route path="/start-test" element={<StartTestPage />} />
  <Route path="/results" element={<ShowRsultsPage />} />
</Route>
</Routes> */}