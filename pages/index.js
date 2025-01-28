import { Poppins } from "next/font/google";

import { useEffect, useState } from "react";

import Aos from "aos";
import "aos/dist/aos.css";
import Loader from "../components/global/loader";
import { Navbar } from "../components/global/navbar";
import Home from "../components/ui/home";
import About from "../components/ui/about";
import Services from "../components/ui/services";
import Portfolio from "../components/ui/portfolio";
import { Startups } from "../components/ui/startups";
import { Contact } from "lucide-react";
import Footer from "../components/global/footer";

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
