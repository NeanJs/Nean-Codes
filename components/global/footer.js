import Link from "next/link";
import React from "react";
import ContentWrapper from "./ContentWrapper";
import { FaArrowUp, FaXTwitter } from "react-icons/fa6";
import {
  FaDiscord,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { Button } from "./button";
import BodyWrapper from "./BodyWrapper";
function Footer() {
  const Links = [
    {
      title: "LinkedIn",
      icon: <FaLinkedinIn />,
      url: "",
    },
    {
      title: "Facebook",
      icon: <FaFacebookF />,
      url: "",
    },
    {
      title: "Instagram",
      icon: <FaInstagram />,
      url: "",
    },
    {
      title: "X",
      icon: <FaXTwitter />,
      url: "",
    },
    {
      title: "X",
      icon: <FaDiscord />,
      url: "",
    },
  ];
  return (
    <BodyWrapper>
      <ContentWrapper>
        <div className="w-full max-h-fit mx-auto py-10 flex flex-col items-center justify-center ">
          <div className="mx-auto flex flex-wrap-reverse flex-row justify-between items-center lg:w-nean_lg">
            <div className="footer-left w-nean_container flex flex-col items-start gap-8">
              <div className="flex flex-row gap-2 items-center">
                <img src="assets/nean_logo.svg" alt="" />
                <span className="text-nean_lg leading-none">Nean Codes.</span>
              </div>
              <p className="leading-loose w-4/5">
                Hey folks, If you have made it this far, I would like to
                say-Thank you very much for visiting my portfolio.I hope you
                liked my works and my portfolio as well. If you have any
                feedbacks or queries, please do ping me at following social
                handles.
              </p>
              <div className="social-links flex gap-2 items-center text-2xl ">
                {Links.map((link, index) => (
                  <Link
                    key={index}
                    className="hover:rotate-12 ease-linear duration-300 w-10 h-10 bg-black grid place-items-center text-white rounded-full"
                    href={link.url}
                  >
                    {link.icon}
                  </Link>
                ))}
              </div>
            </div>
            <div className="footer-right flex flex-col w-80 grayscale items-center font-bold">
              <img src="footer.png" />
              {/* <Button
            primary
            className={
              "bg-black hover:text-black border-black h-20 max-w-20 flex-col"
            }
          >
            <FaArrowUp />
          </Button>
          <span className="tracking-widest">Back to Top</span> */}
            </div>
          </div>
          <hr className="w-5/6 lg:w-nean_lg my-4" />
          <div className="mt-4 flex w-5/6 lg:w-nean_lg justify-between text-center text-nean_dark60 h-fit">
            <span>
              All Rights Reserved | Copyright@{new Date().getFullYear()}
            </span>
            <span>
              Developed by <span className="text-nean_blue">Nean Codes.</span>
            </span>
          </div>
        </div>
      </ContentWrapper>
    </BodyWrapper>
  );
}

export default Footer;
