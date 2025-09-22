import Carousel from "./Components/Carousel.tsx";
import Footer from "./Components/Footer/Footer.tsx";
import Header from "./Components/Header/Header.tsx";
import About from "./Pages/About/About.tsx";
import AboutPage from "./Pages/About/AboutPage.tsx";

export default function App() {
  return (
    <div>
      <Header/>
      <Carousel/>
      <About/>
      <AboutPage/>
      <Footer/>
    </div>
  )
}
