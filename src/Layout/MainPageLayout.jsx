import { Outlet } from "react-router-dom";
import Header from "../Static/Header";
const MainPageLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default MainPageLayout;
