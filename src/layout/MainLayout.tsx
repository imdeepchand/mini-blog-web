import Header from "./Header";
import Footer from "./Footer";
import { Outlet  } from "react-router-dom";
const MainLayout = () => {
  
    return (
      <div>
        <Header />
        <>
          {/* Add more content here */}
          <Outlet/>
        </>
        <Footer />
      </div>
    );
}

export default MainLayout;
