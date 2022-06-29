import Error404 from "@/pages/404";
import { FunctionComponent } from "react";

const Error404C = Error404 as FunctionComponent;

export default {
  title: "Pages/404",
  component: Error404C,
};

export const Error404Page = () => <Error404C />;
