import Fullstack from "../../public/assets/services/fullstack.png";
import UIUX from "../../public/assets/services/uiux.png";
import Native from "../../public/assets/services/native.png";
import BodyWrapper from "../global/BodyWrapper";
import ContentWrapper from "../global/ContentWrapper";
import Image from "next/image";
const SERVICES = [
  {
    title: "UI/UX Design",
    icon: UIUX,
    description:
      "Having an interactive design is always a must to have thing for any business or company.",
  },
  {
    title: "Web Applications",
    icon: Fullstack,
    description:
      "Get your business or yourself an online recognitions across web with interactive fullstack web application.",
  },
  {
    title: "Native Development",
    icon: Native,
    description:
      "Why limit your business only to web? Reach out to your customers in every possible platforms.",
  },
];

export default function Services() {
  return (
    <BodyWrapper className="bg-nean_creamF7 services">
      <ContentWrapper>
        <span className="w-[450px] h-[450px] rounded-full bg-nean_red absolute top-20 left-4"></span>
        <div className="flex flex-col items-start services-block gap-nean_md z-10">
          <div className="header-blocks flex flex-col items-start">
            <span className="mini-title text-nean_base leading_nean_base lg:text-nean_md text-nean_dark60 leading-nean_md">
              What I Do?
            </span>
            <div className="main-title">
              <span className="text-nean_md leading-nean_md lg:text-nean_lg font-medium lg:leading-nean_lg">
                Services I Offer
                <br /> includes
              </span>
              <p className="text-nean_base text-nean_dark60 w-nean_container leading-nean_base">
                I aim at crafting your ideas into digital products across
                platforms with my expertise.
              </p>
            </div>
          </div>
          <div className="w-full flex lg:flex-row flex-col justify-between items-center gap-8 relative">
            {SERVICES.map((service, key) => (
              <div
                className="service-item flex flex-col items-center justify-center h-[400px] max-w-full w-[460px] bg-nean_blue"
                key={key}
              >
                <div className="flex items-start flex-col justify-center gap-2 w-[90%]">
                  <span className="w-[100px] h-[100px] bg-nean_creamF7 grid place-items-center rounded-full item-head">
                    <Image src={service.icon} width={60} height={60} />
                  </span>
                  <div className="item-start flex flex-col text-white font-normal">
                    <span className="text-nean_md leading-nean_lg">
                      {service.title}
                    </span>
                    <hr></hr>
                    <p className="text-nean_base leading-nean_base">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
            <img
              src="assets/global/dots/dots_red.svg"
              className="absolute -left-28 -bottom-32 -z-10 scale-90"
            />
            <img
              src="assets/global/dots/dots_blue.svg"
              className="absolute -right-28 -top-32 -z-10 scale-90"
            />
          </div>
        </div>
      </ContentWrapper>
    </BodyWrapper>
  );
}
