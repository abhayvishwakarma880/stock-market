import ColorCheck from "./ColorCheck";
import AboutUs from "./pages/AboutUs";
import ContactPage from "./pages/ContactPage";
import Home from "./pages/Home";
import MarketInsights from "./pages/MarketInsights";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ServicesPage from "./pages/ServicesPage";
import TermsConditions from "./pages/TermsConditions";

const AppRoute = [
    { path: "/", element: Home, name: "Home" },
    { path: "/color-check", element: ColorCheck, name: "ColorCheck" },
    { path: "/privacy-policy", element: PrivacyPolicy, name: "PrivacyPolicy" },
    { path: "/terms-conditions", element: TermsConditions, name: "TermsConditions" },
    { path: "/about", element: AboutUs, name: "AboutUs" },
    { path: "/services", element: ServicesPage, name: "ServicesPage" },
    { path: "/market-insights", element: MarketInsights, name: "MarketInsights" },
    { path: "/contact", element: ContactPage, name: "Contact" },
]

export default AppRoute