import Home from "@/pages";
import { Course } from "@/types";
import { response } from "@/mocks/courses";

export default {
  title: "Pages/Home",
  component: Home,
};

export const HomePage = () => (
  <Home courses={response.data as unknown as Course[]} />
);
