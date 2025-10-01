import { createBrowserRouter } from "react-router";
import HomePage from "../Pages/Home/HomePage";
import Contact from "../Pages/Contact/ContactPage";
import AboutPage from "../Pages/About/AboutPage";

createBrowserRouter([
  {
    path: "/",
    Component: HomePage,
    children: [
      {
        path: "about",
        Component: AboutPage,
      },
      {
        path: "contact",
        Component: Contact,
      },
    ],
  },
]);