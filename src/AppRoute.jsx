import ColorCheck from "./ColorCheck";
import Home from "./pages/Home";

const AppRoute = [
    { path: "/", element: Home, name: "Home" },
    { path: "/color-check", element: ColorCheck, name: "ColorCheck" },
]

export default AppRoute