import { createRootRoute, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import NavBar from "@/components/NavBar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NotFound from "@/components/NotFound";

export const Route = createRootRoute({
  component: () => (
    <>
      <NavBar />
      <Outlet />
      <ToastContainer />
      <TanStackRouterDevtools />
    </>
  ),
  notFoundComponent: NotFound,
});
