import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import { HomePage } from "./pages/HomePage/HomePage";
import { LoginPage } from "./pages/LoginPage/LoginPage";
import { UserPage } from "./pages/UserPage/UserPage";
import { TestsPage } from "./pages/TestsPage/TestsPage";
import { CreateTest } from "./components/CreateTest/CreateTest";
import { UserPageLayout } from "./components/UserPageLayout/UserPageLayout";
import { Help } from "./components/Help/Help";
import { SaveTestOptions } from "./components/SaveTestOptions/SaveTestOptions";
import { StartTest } from "./components/StartTest/StartTest";

import "./App.scss";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/:user" element={<UserPageLayout />} >
          <Route index element={<UserPage />} />
          <Route path="/:user/create-test" element={<CreateTest />} />
          <Route path="/:user/help" element={<Help />} />
          <Route path="/:user/save-options" element={<SaveTestOptions />} />
          <Route path="/:user/tests-page" element={<TestsPage />} />
          <Route path="/:user/:test" element={<StartTest />} />
        </Route >
      </Route>
    </Routes>
  );
};
