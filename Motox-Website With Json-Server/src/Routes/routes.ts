import { createBrowserRouter } from "react-router";
import HomePage from "../Pages/Home/HomePage";
import Contact from "../Pages/Contact/ContactPage";
import AboutPage from "../Pages/About/AboutPage";
import AddCarForm from "../Pages/Add New Car/AddNewCar";
import ViewAllCars from "../Pages/View All Cars/ViewAllCars";
import App from "../App";
import { carAPIService } from "../Service/CarAPIService";


export const routes = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        index: true,
        loader: async () => {
          return await carAPIService.getAllCars();
        },
        Component: HomePage,
      },
      {
        path: "about",
        Component: AboutPage,
      },
      {
        path: "addNewCar",
        Component: AddCarForm,
      },
      {
        path: "viewAllCar",
        loader: async () => {
          return await carAPIService.getAllCars();
        },
        Component: ViewAllCars,
      },
      {
        path: "contact",
        Component: Contact,
      },
    ],
  },
]);