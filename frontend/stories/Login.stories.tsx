import Login from "@/pages/login";
import { FunctionComponent } from "react";

const LC = Login as FunctionComponent;

export default {
  title: "Pages/Login",
  component: LC,
};

export const LoginPage = () => <LC />;
