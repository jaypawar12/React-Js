import Banner from "../../Components/Banner";
import Carousel from "../../Components/Carousel";
import Donation from "../Donation/Donation";
import Event from "../Event/Event";
import Feature from "../Feature/Feature";
import Service from "../Service/Service";
import TeamSection from "../OurTeam/Team";
import About from "../About/About";

export default function Home() {
    return (
        <>
            <Carousel />
            <About />
            <Service />
            <Feature />
            <Donation />
            <Banner />
            <Event/>
            <TeamSection />

        </>
    )
}
