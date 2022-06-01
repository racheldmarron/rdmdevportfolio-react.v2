import { useTypewriter, Typewriter } from "react-simple-typewriter";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

import me from "../assets/images/me.jpg";
import SocialLink from "./Common/SocialLink";

import me2 from "../assets/images/me2.webp";

const Banner = () => {
  useTypewriter({
    loop: 0,
    cursorStyle: "_",
  });
  return (
    <section id="about">
      <div className="w-full h-screen bg-homeBg bg-no-repeat bg-center bg-cover flex justify-center items-center">
        <div className="flex flex-col justify-center items-center">
          <div className="h-48 w-48 rounded-full">
            <img
              src={me}
              alt="profile"
              className="h-full w-full rounded-full"
            />
          </div>
          <div className="text-center mt-16">
            <h2 className="text-white font-courgette lg:text-6xl md:text-5xl text-3xl ">
              <span className="block pb-3">I'm Rachel Delaney Marron </span>

              <span className="text-secondary">
                <Typewriter
                  words={["Web & App Manager", "QA Engineer", "UX Researcher"]}
                  loop={false}
                  cursor
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={70}
                />
              </span>
            </h2>
          </div>
          <div className="flex items-center py-16">
            <SocialLink
              icon={<FaFacebook />}
              link="https://www.facebook.com/rachel.marron.50"
              color={`hover:text-[#3b5998]`}
            />
            <SocialLink
              icon={<FaInstagram />}
              link="https://www.instagram.com/post_marron_/"
              color={`hover:text-[#e1306c]`}
            />
            <SocialLink
              icon={<FaTwitter />}
              link="https://twitter.com/postmarron"
              color={`hover:text-[#1da1f2]`}
            />
            <SocialLink
              icon={<SiGmail />}
              link="mailto:racheldmarron@gmail.com"
              color={"hover:text-[#d44638]"}
            />
          </div>
          <a href="#aboutMain">
            <button className="actionButtonDesing">More About Me</button>
          </a>
        </div>
      </div>

      {/* Second part */}

      <div
        className="customContainer md:pt-32 md:pb-40 md py-24 font-montserrat"
        id="about"
      >
        <h2 className="title" id="aboutMain">
          About Me
        </h2>
        <div className="grid lg:grid-cols-aboutLg grid-cols-1">
          <div className="flex justify-center flex-col items-center">
            <div className="h-48 w-48 rounded-full">
              <a
                href="https://www.linkedin.com/in/rachelmarron/"
                target={"_blank"}
                rel="noreferrer"
              >
                <img
                  src={me2}
                  alt="profile"
                  className="h-full w-full rounded-full"
                />
              </a>
            </div>
            <h2 className=" text-primary text-2xl font-semibold pt-4">
              Rachel Delaney Marron
            </h2>
          </div>
          <div className="aboutInfoContainer relative shadow-2xl rounded-xl bg-white w-full p-8 mt-12 lg:mt-0">
            <div className="text-primary">
              <div>
                <h2 className="text-secondary font-semibold text-lg pb-3">
                  Hi! This is Rachel Delaney Marron.
                </h2>
                <h2 className="pb-3">
                  A dedicated eCommerce & QA professional with a passion for
                  building accessible DTC tech. Facilitating operational excellence, I work with engineering
                  teams and cross-functional stakeholders to enhance UX and
                  increase user acquisition and retention.
                </h2>
                <h2 className="pb-3">
                  My goal is to use my experiences in product marketing, human
                  behavior, and software engineering to create and manage
                  products that better people's lives.
                </h2>
                <h2>
                  My personal passions include backpacking National Parks,
                  sustainability, and gender equality across corporate
                  industries.
                </h2>
              </div>
            </div>
            <div className="flex gap-4 pt-4">
              <a
                href="https://github.com/racheldmarron/"
                target={"_blank"}
                rel="noreferrer"
              >
                <FaGithub className="text-[#181717] text-4xl" />
              </a>
              <a
                href="https://www.linkedin.com/in/rachelmarron/"
                target={"_blank"}
                rel="noreferrer"
                className="text-[#0A66C2] text-4xl"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
