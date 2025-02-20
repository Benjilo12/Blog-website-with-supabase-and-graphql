import { Outlet } from "react-router";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import TopBar from "./component/TopBar";

function Layout() {
  return (
    <div>
      <TopBar />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
