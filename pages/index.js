import { Poppins } from "next/font/google";
import Home from "@/components/home";
import About from "@/components/about";
import { Navbar } from "@/components/navbar";
import Services from "@/components/services";
import Portfolio from "@/components/portfolio";
import Footer from "@/components/footer";
import Loader from "@/components/loader";
import { useEffect, useState } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Contact from "@/components/contact";
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
          <Contact />
          <Footer />
        </>
      )}
    </div>
  );
}
