import { Poppins } from "next/font/google";
import Home from "../components/layout/home";
import About from "../components/layout/about";
import { Navbar } from "../components/global/navbar";
import Services from "../components/layout/services";
import Portfolio from "../components/layout/portfolio";
import Footer from "../components/global/footer";
import Loader from "../components/global/loader";
import { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Contact from "../components/layout/contact";
import { Startups } from "../components/layout/startups";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function HomePage() {
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoader(false), 4000);
  }, []);
  useEffect(() => {
    Aos.init({ duration: 600, easing: "ease", once: true });
  }, []);
  return (
    <div className={`relative ${poppins.className} `}>
      {loader ? (
        <Loader />
      ) : (
        <>
          <Navbar />
          <Home />
          <About />
          <Services />
          <Portfolio />
          <Startups />
          <Contact />
          <Footer />
        </>
      )}
    </div>
  );
}
