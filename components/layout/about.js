import bg2 from "@/public/assets/about/addons/1.svg";
import bg1 from "@/public/assets/about/addons/2.svg";
import bg3 from "@/public/assets/about/addons/3.svg";
import bg4 from "@/public/assets/about/addons/4.svg";
import Image from "next/image";
import BodyWrapper from "../components/global/BodyWrapper";

import ContentWrapper from "../global/ContentWrapper";
export default function About() {
  const journeytabs = [
    {
      title: "4",
      subtitle: "Years of Experience",
      bg: bg1,
    },
    {
      title: "3",
      bg: bg2,
      subtitle: "Companies Worked",
    },
    {
      bg: bg3,
      title: "12",
      subtitle: "Clients Served",
    },
    {
      bg: bg4,

      title: "18",
      subtitle: "Projects Completed",
    },
  ];
  return (
    <BodyWrapper className="bg-nean_creamF1 about">
      <img
        src={"/assets/about/elements-about.png"}
        className="absolute left-0 h-[600px] opacity-50"
      />
      <ContentWrapper>
        <div className="about-blocks flex flex-col-reverse justify-center items-center gap-nean_base lg:gap-nean_md  lg:justify-between lg:flex-row z-10">
          <div className="block-text flex flex-col items-start gap-nean_md">
            <span className="text-nean_md lg:text-nean_lg text-head">
              <u>Let me begin!</u>
            </span>
            <div className=" text-description flex flex-col lg:w-nean_container gap-nean_base leading-nean_base">
              <p>
                Hey, I am Nijan Adhikari, experienced Full Stack Engineer and
                Native Mobile App Developer with 4+ years of experience in
                crafting and bringing innovative ideas to life and serve them
                across different platforms. My expertise spans a wide spectrum
                of technologies, from crafting seamless user experiences to
                architecting scalable backend systems.
              </p>
              <p>
                When I am not painting my screen with colorful lines of codes, I
                like to sit and enjoy the sunset, take my dog out for walk, read
                books, & have a little chit-chat with myself.
              </p>
            </div>
          </div>
          <div className="block-image relative grid place-items-center ">
            <span
              data-aos-delay={600}
              data-aos="fade-up"
              className="rounded-full  w-[400px] h-[400px]  -z-10 -top-10 bg-nean_red  absolute"
            ></span>
            <span
              data-aos-delay={300}
              data-aos="fade-up"
              className="rounded-full  w-[400px] h-[400px] -z-10 top-10 bg-nean_blue  absolute"
            ></span>
            <img data-aos="fade-up" src="/nean-home.png" className="max-w-sm" />
          </div>
        </div>
        <div className="journey-blocks flex flex-col gap-nean_md z-10">
          <span className="text-nean_md lg:text-nean_lg leading-nean_md font-medium">
            My Journey so far
          </span>
          <div className="gap-nean_md journey-tabs flex lg:justify-between w-full mx-auto flex-wrap">
            {journeytabs.map((tab, key) => (
              <div
                className="tab relative flex items-center  gap-[8px]"
                key={key}
                data-aos="fade-right"
                data-aos-delay={key * 200}
              >
                <div className="tab-image flex items-center justify-end w-[140px] h-[140px]">
                  <Image
                    alt=""
                    width={140}
                    height={140}
                    src={tab.bg}
                    className="absolute left-0"
                  />
                  <span className="text-[128px] font-medium text-nean_blue flex items-center leading-none z-10">
                    {tab.title}
                  </span>
                </div>

                <span className="text-nean_md w-[140px]">{tab.subtitle}</span>
              </div>
            ))}
          </div>
        </div>
      </ContentWrapper>
    </BodyWrapper>
  );
}
