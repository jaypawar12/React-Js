import { Outlet } from "react-router";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";

export default function App() {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    </>
  );
}
