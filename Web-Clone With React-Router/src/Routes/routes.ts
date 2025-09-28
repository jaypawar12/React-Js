import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../Pages/Home/Home";
import AboutPage from "../Pages/About/AboutPage";
import ServicePage from "../Pages/Service/ServicePage";
import DonationPage from "../Pages/Donation/DonationPage";
import EventPage from "../Pages/Event/EventPage";
import OurTeamPage from "../Pages/OurTeam/OurTeamPage";
import FeaturePage from "../Pages/Feature/FeaturePage";
import NotFoundPage from "../Pages/NotFound/NotFoundPage";
import ContactPage from "../Pages/Contact/ContactPage";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: App,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: "about",
                Component: AboutPage
            },
            {
                path: "service",
                Component: ServicePage
            },
            {
                path: "donation",
                Component: DonationPage
            },
            {
                path: "event",
                Component: EventPage
            },
            {
                path: "feature",
                Component: FeaturePage
            },
            {
                path: "team",
                Component: OurTeamPage
            },
            {
                path: "contact",
                Component: ContactPage
            },
            {
                path: "*",
                Component: NotFoundPage
            }
        ]
    }
])