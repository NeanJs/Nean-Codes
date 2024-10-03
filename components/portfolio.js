import React, { useEffect, useState } from "react";
import BodyWrapper from "./global/BodyWrapper";
import ContentWrapper from "./global/ContentWrapper";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import Aos from "aos";
import { Button } from "./button";
import {
  MdOutlineViewCarousel as Carousel,
  MdOutlineGridView as Grid,
} from "react-icons/md";

function Portfolio() {
  const [slideID, setSlideID] = useState(0);

  const projects = [
    {
      id: 1,
      title: "Project One",
      tags: ["React", "Node.js", "MongoDB", "Firebase"],
      type: "Web Application | Fullstack",
      thumbnail: `/assets/portfolio/test-project.png`,
    },
    {
      id: 2,
      title: "Project Two",
      tags: ["React Native", "AWS", "MongoDB", "Firebase"],
      type: "Mobile Application | Native",
      thumbnail: `https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=3455&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
    },
    {
      id: 3,
      title: "Project Three",
      tags: ["React", "Node.js", "MongoDB", "Firebase"],
      type: "Web Application | Fullstack",
      thumbnail: `https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=3455&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
    },
    {
      id: 4,
      title: "Project Four",
      tags: ["React", "Node.js", "MongoDB", "Firebase"],
      type: "Web Application | Fullstack",
      thumbnail: `/assets/portfolio/test-project.png`,
    },
  ];

  const handleSlide = (type) => {
    const project = document.querySelector(".project");
    const works = document.querySelector(".featured-works");
    let newSlideID;

    if (slideID <= 0 && type == "prev") {
      newSlideID = projects.length - 1;
    } else if (slideID + 1 >= projects.length && type == "next") {
      newSlideID = 0;
    } else {
      newSlideID = type == "prev" ? slideID - 1 : slideID + 1;
    }

    setSlideID(newSlideID);
    works.scroll({
      behavior: "smooth",
      left: newSlideID * project.clientWidth,
    });
  };
  const [view, setView] = useState("carousel");
  const handleChangeView = (mode) => {
    setView(mode);
  };
  return (
    <BodyWrapper className={`bg-white portfolio`}>
      <ContentWrapper>
        <div className="flex flex-col gap-nean_base items-start">
          <span className="md:text-nean_md md:leading-nean_md font-medium">
            Featured Works
          </span>
          <span className="lg:text-nean_base  lg:leading-nean_base font-normal text-nean_dark60">
            Bringing innovative and creative ideas to life
          </span>
          <div className="view-blocks flex flex-row-reverse">
            <Button
              className={"flex gap-2 items-center"}
              disabled={view == "grid"}
              primary={view == "grid"}
              onClick={() => handleChangeView("grid")}
            >
              <Grid />
              Grid
            </Button>
            <Button
              className={"flex gap-2 items-center"}
              disabled={view == "carousel"}
              primary={view == "carousel"}
              onClick={() => handleChangeView("carousel")}
            >
              <Carousel />
              Carousel
            </Button>
          </div>
          <>
            {view == "grid" ? (
              <div
                className={` grid-view projects w-full grid grid-cols-1 md:grid-cols-2 gap-2`}
              >
                {projects.map((project, id) => {
                  return (
                    <div
                      key={id}
                      className="project overflow-hidden group flex flex-col gap-3 items-start relative"
                    >
                      <img
                        data-aos="fade-up"
                        src={project.thumbnail}
                        alt=""
                        data-aos-delay={id * 200}
                        className="project-img w-full h-[350px]  object-cover group-hover:translate-y-0"
                      />
                      <div className="flex ease-in duration-300 flex-col gap-4 w-full h-full absolute translate-y-[100%] group-hover:translate-y-0 bg-nean_creamF7 bg-opacity-40 backdrop-blur-lg p-3">
                        <div className="project-head flex flex-col gap-2 ">
                          <span className="text-nean_base md:text-nean_md">
                            {project?.title}
                          </span>
                          <span className="text-xs">{project?.type}</span>
                        </div>
                        <div className="prj-tags my-2 flex gap-1 text-xs">
                          {project?.tags.map((tag, key) => (
                            <span
                              key={key}
                              className="bg-nean_creamF2 text-black rounded px-2 py-1"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <p className="text-sm text-nean_dark60 leading-relaxed md:leading-nean_base">
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit. Alias blanditiis beatae amet cumque sequi
                          dolorum quod, explicabo odit officia. Numquam delectus
                          debitis amet explicabo rem? Blanditiis nisi dolor rem
                          reiciendis consectetur illo, excepturi inventore,
                          fugit magni doloribus laudantium consequatur non.
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <>
                <div className="featured-works caraousel-view mt-10 w-full flex flex-row overflow-scroll snap-x snap-mandatory">
                  {projects.map((project, id) => (
                    <div
                      key={id}
                      className="min-w-full items-start max-h-max min-h-fit py-8 flex flex-row gap-2 relative text-nean_creamF1"
                    >
                      <div className="project snap-start text-gray-800 flex gap-4 flex-wrap-reverse lg:flex-nowrap ">
                        <div className="flex flex-col gap-4 w-full lg:w-2/4">
                          <div className="project-head flex flex-col gap-2">
                            <span className="text-nean_base md:text-nean_md text-nean_dark60">
                              0{id + 1}
                            </span>
                            <span
                              className="text-nean_base md:text-nean_lg"
                              data-aos="fade-up"
                            >
                              {project?.title}
                            </span>
                            <span className="text-xs">{project?.type}</span>
                          </div>
                          <div className="prj-tags my-2 flex gap-1 text-xs">
                            {project?.tags.map((tag, key) => (
                              <span
                                key={key}
                                className="bg-nean_creamF2 text-black rounded px-2 py-1"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                          <p
                            className="text-nean_base text-nean_dark60 leading-nean_base"
                            data-aos="fade-up"
                            data-aos-delay={500}
                          >
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Alias blanditiis beatae amet cumque sequi
                            dolorum quod, explicabo odit officia. Numquam
                            delectus debitis amet explicabo rem? Blanditiis nisi
                            dolor rem reiciendis consectetur illo, excepturi
                            inventore, fugit magni doloribus laudantium
                            consequatur non.
                          </p>
                        </div>
                        <img
                          className="project-img grayscale-0 w-full h-[350px] lg:w-2/4 object-cover "
                          src={project.thumbnail}
                        ></img>
                      </div>

                      {/* 
                <div className="project-body flex justify-center flex-col opacity-0 group-hover:opacity-100 group-hover:backdrop-blur-sm ease-out duration-500 absolute bottom-0 bg-nean_dark60 group-hover:bg-opacity-40 w-full h-full p-2">
                  <span className="text-xs ">{projects[0].type}</span>
                  <span className="text-nean_md">{projects[0].title}</span>
                  <div className="prj-tags my-2 flex gap-1 text-xs">
                    {projects[0].tags.map((tag, key) => (
                      <span
                        key={key}
                        className="bg-nean_creamF2 text-black rounded px-2 py-1"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <hr />
                  <div className="prj-desc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                    molestias, incidunt exercitationem voluptatibus laudantium
                    accusantium quis nisi cumque totam facere ullam? Molestiae
                    quos voluptas sit corporis necessitatibus sequi dolor
                    quisquam.
                  </div>
  
                  <a
                    href="https://growtech.com.np"
                    className=" w-[100px] duration-300 text-center p-2 bg-nean_creamF2 text-black hover:bg-transparent border-nean_creamF2 border-2 hover:text-nean_creamF2"
                    target="_blank"
                  >
                    Visit
                  </a>
                </div> */}
                    </div>
                  ))}
                </div>
                <div className="flex gap-2 w-full justify-center">
                  {projects.map((prk) => {
                    return (
                      <span
                        className={`w-4 h-4 m-2  border-2 border-nean_blue ${
                          slideID + 1 == prk.id &&
                          "bg-nean_blue rotate-45 ease-linear duration-300"
                        }`}
                      ></span>
                    );
                  })}
                </div>
                <div className="toggle-arrows text-6xl gap-8 justify-between w-fit flex h-fit  text-black right-0 lg:left-0">
                  <BsArrowLeft
                    className=""
                    onClick={(e) => handleSlide("prev")}
                  />
                  <BsArrowRight
                    className=""
                    onClick={(e) => handleSlide("next")}
                  />
                </div>
              </>
            )}
          </>
          {/* Grid View */}

          {/* Carousel View */}
        </div>
        {/* <span className="flex cursor-pointer items-center gap-2 text-nean_md font-light mx-auto py-4 hover:gap-4 ease-linear duration-200">
          View All Projects 
        </span> */}
      </ContentWrapper>
    </BodyWrapper>
  );
}

export default Portfolio;
