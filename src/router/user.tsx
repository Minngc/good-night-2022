import { Navigate, RouteObject } from "react-router-dom";
import Home from "../page/home";
import About from "../page/about";
import NoMatch from "../page/error/noMatch";
import LaunchSuccess from "../page/launch/launchSuccess";
import Others from "../page/others";
import LaunchEdit from "../page/launch/launchEdit";
import FeishuRedirect from "../page/feishuRedirect";
import QqRedirect from "../page/qqRedirect";

import platformSwitch from "../higherOrderComponent/platformSwitch";

const HomePage = platformSwitch<{}>({ children: Home, url: "/home" });
const OthersPage = platformSwitch<{}>({ children: Others, url: "/others" });
const AboutPage = platformSwitch<{}>({
  children: About,
  url: "/about",
  // style: { height: "920px" },
});
const LaunchEditPage = platformSwitch<{}>({
  children: LaunchEdit,
  url: "/launch/edit",
});
const NoMatchPage = platformSwitch<{}>({ children: NoMatch, url: "*" });

const LaunchSuccessPage = platformSwitch<{}>({
  children: LaunchSuccess,
  url: "/launch/success",
});

const user: RouteObject[] = [
  {
    id: "redirectToHome",
    path: "/",
    element: <Navigate to="/home" />,
  },
  {
    id: "fsre",
    path: "/fsre",
    element: <FeishuRedirect />,
  },
  {
    id: "qqre",
    path: "/qqre",
    element: <QqRedirect />,
  },
  {
    id: "home",
    path: "/home",
    element: <HomePage />,
  },
  {
    id: "launch",
    path: "/launch",
    element: <LaunchEditPage />,
    children: [
      {
        id: "launch success",
        path: "success",
        element: <LaunchSuccessPage />,
      },
    ],
  },
  {
    id: "about",
    path: "/about",
    element: <AboutPage />,
  },
  {
    id: "others",
    path: "/others",
    element: <OthersPage />,
  },
  {
    id: "no match",
    path: "*",
    element: <NoMatchPage />,
  },
];

export default user;
