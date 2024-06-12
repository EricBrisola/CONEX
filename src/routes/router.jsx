import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Professionals from "../pages/Professionals";
import ContactUs from "../pages/ContactUs";
import AboutUS from "../pages/AboutUs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about-us",
    element: <AboutUS />,
  },
  {
    path: "/professionals",
    element: <Professionals />,
  },
  {
    path: "/contact-us",
    element: <ContactUs />,
  },
]);

export default router;
