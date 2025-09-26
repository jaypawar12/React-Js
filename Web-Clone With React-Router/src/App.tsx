import Banner from "./Components/Banner.tsx";
import Carousel from "./Components/Carousel.tsx";
import Donation from "./Components/Donation.tsx";
import Event from "./Components/Event.tsx";
import Footer from "./Components/Footer/Footer.tsx";
import Header from "./Components/Header/Header.tsx";
import NewsletterSection from "./Components/Newslatter.tsx";
import Service from "./Components/Service.tsx";
import TeamSection from "./Components/Team.tsx";
import Feature from "./Feature.tsx";
import About from "./Pages/About/About.tsx";

export default function App() {
  return (
    <div>
      <Header />
      <Carousel />
      <About />
      <Service/>
      <Feature/>
      <Donation/>
      <Banner />
      <Event />
      <TeamSection />
      <NewsletterSection />
      <Footer />
    </div>
  )
}
