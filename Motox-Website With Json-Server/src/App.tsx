import Banner from "./Components/Banner/Banner";
import Header from "./Components/Header/Header";
import AboutPage from "./Pages/About/AboutPage";
import AddCarForm from "./Pages/Add New Car/AddNewCar";
import Contact from "./Pages/Contact/ContactPage";

export default function App() {
  return (
    <>
    <Header/>
    <Banner/>
    <AboutPage/>
    <Contact/>
    <AddCarForm addCar={(car) => console.log(car)} />
    </>
  );
}
