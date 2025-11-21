import { useTranslation } from "react-i18next";
import AboutMe from "../components/pageComponents/HomeComponents/AboutMe";

function Home() {
  const { t } = useTranslation();

  return (
    <>
      <AboutMe />
    </>
  );
}

export default Home;
