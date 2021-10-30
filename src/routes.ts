import Login from "./components/login";
import Chat from "./components/chat";

export const publicRoutes = [
  {
    path: "/",
    Component: Chat,
  },
];

export const privateRoutes = [
  {
    path: "/",
    Component: Login,
  },
];
