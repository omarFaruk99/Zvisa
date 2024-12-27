import { createBrowserRouter } from "react-router-dom";
import Layout from "../Components/Layout";
import Home from "../Components/Home";
import AllVisa from "../Components/AllVisa";
import AddVisa from "../Components/AddVisa";
import MyAddedVisas from "../Components/MyAddedVisas";
import MyVisaApplications from "../Components/MyVisaApplications";
import VisaDetails from "../Components/VisaDetails";
import Register from "../Components/Register";
import Login from "../Components/Login";
import ForgotPassword from "../Components/ForgotPassword";
import PrivateRouter from "./PrivateRouter";
import ErrorPage from "../Components/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/allVisa",
        element: <AllVisa></AllVisa>,
        loader: () => fetch("https://zvisa-server.vercel.app/visas"),
      },
      {
        path: "/addVisa",
        element: (
          <PrivateRouter>
            {" "}
            <AddVisa></AddVisa>
          </PrivateRouter>
        ),
      },
      {
        path: "/myAddedVisas",
        element: (
          <PrivateRouter>
            {" "}
            <MyAddedVisas></MyAddedVisas>
          </PrivateRouter>
        ),
      },
      {
        path: "/myVisaApplication",
        element: (
          <PrivateRouter>
            <MyVisaApplications></MyVisaApplications>
          </PrivateRouter>
        ),
      },
      {
        path: "/visaDetails/:id",
        element: (
          <PrivateRouter>
            <VisaDetails></VisaDetails>
          </PrivateRouter>
        ),
        loader: ({ params }) =>
          fetch(`https://zvisa-server.vercel.app/visas/details/${params.id}`),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/forgotPassword",
        element: <ForgotPassword></ForgotPassword>,
      },
      // {
      //   path: "*",
      //   element: <ErrorPage></ErrorPage>,
      // },
    ],
  },
  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },
]);

export default router;
