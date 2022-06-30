import Home from "@/pages";
import { FunctionComponent } from "react";

const HC = Home as FunctionComponent;

export default {
  title: "Pages/Home",
  component: HC,
};

export const HomePage = () => <HC />;
