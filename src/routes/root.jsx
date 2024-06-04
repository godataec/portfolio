import { Outlet } from "react-router-dom";
import Header from "../components/header.jsx";

export default function Root() {
  return (
    <div>
      <Header />
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
}