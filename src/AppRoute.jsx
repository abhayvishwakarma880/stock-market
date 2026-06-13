import { lazy } from "react";

const ColorCheck = lazy(() => import("./ColorCheck"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const Home = lazy(() => import("./pages/Home"));
const MarketInsights = lazy(() => import("./pages/MarketInsights"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const ServicesPage = lazy(() => import("./pages/ServicesPage"));
const TermsConditions = lazy(() => import("./pages/TermsConditions"));
const EquityServices = lazy(() => import("./pages/EquityServices"));
const DerivativeServices = lazy(() => import("./pages/DerivativeServices"));
const IndexServices = lazy(() => import("./pages/IndexServices"));

const AppRoute = [
    { path: "/", element: Home, name: "Home" },
    { path: "/color-check", element: ColorCheck, name: "ColorCheck" },
    { path: "/privacy-policy", element: PrivacyPolicy, name: "PrivacyPolicy" },
    { path: "/terms-conditions", element: TermsConditions, name: "TermsConditions" },
    { path: "/about", element: AboutUs, name: "AboutUs" },
    { path: "/services", element: ServicesPage, name: "ServicesPage" },
    { path: "/services/equity", element: EquityServices, name: "EquityServices" },
    { path: "/services/derivatives", element: DerivativeServices, name: "DerivativeServices" },
    { path: "/services/index", element: IndexServices, name: "IndexServices" },
    { path: "/market-insights", element: MarketInsights, name: "MarketInsights" },
    { path: "/contact", element: ContactPage, name: "Contact" },
]

export default AppRoute