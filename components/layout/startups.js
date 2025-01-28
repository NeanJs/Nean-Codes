import { FaExternalLinkAlt } from "react-icons/fa";
import BodyWrapper from "../global/BodyWrapper";
import ContentWrapper from "../global/ContentWrapper";
import { LuExternalLink } from "react-icons/lu";

export const Startups = () => {
  const projects = [
    {
      image:
        "https://plus.unsplash.com/premium_photo-1731622041671-2634d770447b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Hawa Production",
    },
    {
      image:
        "https://plus.unsplash.com/premium_photo-1733514433474-e91aeaed25fa?q=80&w=1664&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Roomies",
    },
    {
      image:
        "https://images.unsplash.com/photo-1736767431540-0d590ba5efc2?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Flip It",
    },
  ];
  return (
    <BodyWrapper className={"startups"}>
      <ContentWrapper>
        <div className="flex flex-col gap-nean_base ">
          <span className="md:text-nean_md md:leading-nean_md font-medium">
            Ongoing Startup Visions
          </span>
          <span className="lg:text-nean_base  lg:leading-nean_base font-normal text-nean_dark60">
            Turning my visionary concepts into thriving ventures
          </span>
          <div className="py-6 flex flex-col items-start">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full ">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="group relative"
                  data-aos="zoom-in"
                  data-aos-delay={index * 200}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-[400px] object-cover transform transition-transform duration-300 group-hover:scale-110 group"
                    />
                    <span className="absolute z-10 bottom-0 right-0 p-4 text-nean_md ease-linear duration-200 opacity-0 group-hover:opacity-100 text-white">
                      <LuExternalLink />
                    </span>
                    <div className="absolute inset-0 bg-black bg-opacity-30 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                  </div>
                  <h3 className="mt-4 text-left text-lg font-normal tracking-widest">
                    {project.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </ContentWrapper>
    </BodyWrapper>
  );
};
