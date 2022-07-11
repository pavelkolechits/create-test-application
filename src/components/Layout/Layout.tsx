import { Appbar } from "../Appbar/Appbar";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <>
      <Appbar />
      <Outlet />
    </>
  );
};
