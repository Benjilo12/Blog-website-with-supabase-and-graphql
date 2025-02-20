import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Advertising from "./pages/Advertising";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import PageNotFound from "./pages/PageNotFound";
import Layout from "./Layout";
import AddBlog from "./pages/AddBlog";

function App() {
  return (
    <div>
      <main>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<AboutUs />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="addblog" element={<AddBlog />} />
            <Route path="contact" element={<ContactUs />} />
            <Route path="advertising" element={<Advertising />} />
            <Route path="privacy" element={<PrivacyPolicy />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
