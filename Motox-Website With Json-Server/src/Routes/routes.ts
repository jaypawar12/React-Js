import { createBrowserRouter } from "react-router";
import HomePage from "../Pages/Home/HomePage";
import Contact from "../Pages/Contact/ContactPage";
import AboutPage from "../Pages/About/AboutPage";
import AddCarForm from "../Pages/Add New Car/AddNewCarPage";
import ViewAllCars from "../Pages/View All Cars/ViewAllCars";
import App from "../App";
import { carAPIService } from "../Service/CarAPIService";
import EditCarPage from "../Pages/Edit Car/editCarPage";

export const routerName = {
  home : "/",
  about : "/about",
  addNewCar : "/addNewCar",
  editCar : "/edit-car/:id",
  viewAllCar : "/viewAllCar",
  contact : "/contact"
}

export const routes = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        index: true,
        loader: async () => {
          return await carAPIService.fetchAllCars();
        },
        Component: HomePage,
      },
      {
        path: routerName.about,
        Component: AboutPage,
      },
      {
        path: routerName.addNewCar,
        Component: AddCarForm,
      },
      {
        path: routerName.editCar,
        loader: async ({ params }) => {
          return await carAPIService.fetchCarById(params.id as string);
        },
        Component: EditCarPage,
      },
      {
        path: routerName.viewAllCar,
        loader: async () => {
          return await carAPIService.fetchAllCars();
        },
        Component: ViewAllCars,
      },
      {
        path: routerName.contact,
        Component: Contact,
      },
    ],
  },
]);