import { FunctionComponent } from "react";
import Registration from "@/pages/registration";

const RC = Registration as FunctionComponent;

export default {
  title: "Pages/Registration",
  component: RC,
};

export const RegistrationPage = () => <RC />;
