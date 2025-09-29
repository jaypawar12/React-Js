import { Outlet } from "react-router";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import NewsLetterSection from "./Components/Newslatter";

export default function App() {
  return (
    <div>
      <Header/>
      <Outlet />
      <NewsLetterSection/>
      <Footer />
    </div>
  )
}
