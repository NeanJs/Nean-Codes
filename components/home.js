import { Button } from "./button";
import { HiArrowLongDown as ArrowDownwards } from "react-icons/hi2";
import ContentWrapper from "@/components/global/ContentWrapper";
import BodyWrapper from "@/components/global/BodyWrapper";
import { Link } from "react-scroll";
import { TfiCommentAlt } from "react-icons/tfi";

export default function Home() {
  return (
    <BodyWrapper className="bg-nean_lightE1 home">
      <span className="w-[400px] h-[400px] lg:w-[800px] lg:h-[800px] bg-nean_lightD9 rounded-full absolute -left-[25vw] z-0"></span>
      <ContentWrapper>
        <div
          className="home-blocks flex flex-col-reverse justify-center items-start lg:items-center gap-nean_base lg:justify-between lg:flex-row  z-10"
          data-aos="fade-up"
        >
          <div className="block-text flex flex-col gap-nean_base md:w-[600px] w-full">
            <div className="block-info flex-col gap-nean_base flex">
              <span className="text-nean_md leading-nean_md md:text-nean_lg md:leading-nean_lg font-medium tracking-[5.5%]">
                creative fullstack developer.
              </span>
              <p className="text-nean_base leading-nean_base text-nean_dark60 font-light tracking-[3%]">
                Passionate Full Stack & Native App Developer. I love crafting &
                translating ideas into elegant & functional digital solutions.
              </p>
            </div>
            <div className="block-buttons flex items-center gap-4 flex-wrap">
              <Link to="contact" smooth >
                <Button primary rounded className={"flex gap-2"}>
                  <span>Discuss a project</span>
                  <TfiCommentAlt />
                </Button>
              </Link>
              <Link to="portfolio" smooth offset={150}>
                <Button rounded>
                  <span>See My Works</span>
                  <ArrowDownwards />
                </Button>
              </Link>
            </div>
          </div>
          <div className="block-image relative">
            <img src="/assets/about/developer.svg" className="" />

            {/* <div className="image-main border-[10px] border-nean_dark30 w-[200px] h-[200px] lg:w-[420px] lg:h-[550px] z-10">
              <img
                src="assets/home/pp.png"
                alt={""}
                className="w-full h-full object-cover saturate-0"
              />
            </div> 
            
          

            <img
              src="assets/global/dots/dots_red.svg"
              className="absolute -left-20 -bottom-20 -z-10 scale-90"
            />
            <img
              src="assets/global/dots/dots_blue.svg"
              className="absolute -right-28 bottom-10 -z-10 scale-90"
            />
            */}
          </div>
        </div>
      </ContentWrapper>
      <Link
        smooth
        spy
        to="about"
        className="w-full absolute bottom-4 flex justify-center items-center"
      >
        <img src="/assets/mouse.gif" width={40} height={40} alt={"scroller"} />
      </Link>
    </BodyWrapper>
  );
}
