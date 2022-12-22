import { Navigate, RouteObject } from "react-router-dom";
import Home from "../page/home";
import About from "../page/about";
import NoMatch from "../page/error/noMatch";
import Launch from "../page/launch";
import LaunchSuccess from "../page/launch/launchSuccess";
import Others from "../page/others";
import LaunchEdit from "../page/launch/launchEdit";
import FeishuRedirect from "../page/feishuRedirect";
import QqRedirect from "../page/qqRedirect";


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
    element: <Home />,
  },
  {
    id: "launch",
    path: "/launch",
    element: <Launch/>,
    children: [
      {
        id: "launch edit",
        path: "edit",
        element: <LaunchEdit />,
      },
      {
        id: "launch success",
        path: "success",
        element: <LaunchSuccess />,
      },
    ],
  },
  {
    id: "about",
    path: "/about",
    element: <About />,
  },
  {
    id: "others",
    path: "/others",
    element: <Others />,
  },
  {
    id: "no match",
    path: "*",
    element: <NoMatch />,
  },
];

export default user;
