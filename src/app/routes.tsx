import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Releases } from "./pages/Releases";
import { Events } from "./pages/Events";
import { Radio } from "./pages/Radio";
import { Merch } from "./pages/Merch";
import { Contact } from "./pages/Contact";
import { DesignSystem } from "./pages/DesignSystem";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "releases", Component: Releases },
      { path: "events", Component: Events },
      { path: "radio", Component: Radio },
      { path: "merch", Component: Merch },
      { path: "contact", Component: Contact },
      { path: "design-system", Component: DesignSystem },
      { path: "*", Component: () => <div className="p-24 text-center text-white text-4xl font-heading uppercase">404 Not Found</div> },
    ],
  },
]);
