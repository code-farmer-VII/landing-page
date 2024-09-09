import About from "@/pages/About";
import Cards from "@/pages/Cards";
import Contact from "@/pages/Contact";
import Fotter from "@/pages/Fotter";
import Introduction from "@/pages/Home";
import Header from "@/components/Header";


export default function Home() {

  return (
      <div>
        <Header />
        <Introduction />
        <Cards />
        <About />
        <Contact />
        <Fotter />
      </div>
  );
}
