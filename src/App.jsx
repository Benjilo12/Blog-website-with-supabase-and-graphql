import { Route, Routes } from "react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import CSS for Toastify
import Home from "./pages/Home";
import BlogDetails from "./pages/BlogDetails";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Advertising from "./pages/Advertising";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import PageNotFound from "./pages/PageNotFound";
import Layout from "./Layout";
import AddBlog from "./pages/AddBlog";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

function App() {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <main>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="about" element={<AboutUs />} />
              <Route path="blog/:id" element={<BlogDetails />} />
              <Route path="addblog" element={<AddBlog />} />
              <Route path="contact" element={<ContactUs />} />
              <Route path="advertising" element={<Advertising />} />
              <Route path="privacy" element={<PrivacyPolicy />} />
              <Route path="*" element={<PageNotFound />} />
            </Route>
          </Routes>

          {/* ToastContainer to display notifications */}
          <ToastContainer
            position="top-center"
            autoClose={5000} // Auto close after 5 seconds
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
        </main>
      </QueryClientProvider>
    </div>
  );
}

export default App;
