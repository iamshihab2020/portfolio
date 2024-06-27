import { Avatar, Typography, Chip, Button } from "@material-tailwind/react";
import { TypeAnimation } from "react-type-animation";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";



const HomeContent = () => {
  return (
    <div
      className={`bg-hero bg-no-repeat bg-center bg-cover w-full min-h-screen pb-14 px-10 `}
    >
      <div>
        <h1 className="animate__animated animate__fadeInDown text-5xl lg:text-6xl text-secondary-200 font-bold text-center py-14 sm:-mb-5 md:mb-5 lg:mb-10 ">
          <TypeAnimation
            sequence={[
              "Web Developer",
              1000,
              "Full Stack Developer",
              1000,
              "Frontend Developer",
              1000,
              "Born to Code",
              1000,
            ]}
            speed={60}
            repeat={Infinity}
          />
        </h1>
      </div>

      <div className="flex items-center justify-between flex-col lg:flex-row px-10">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-32 ">
          <div className="animate__animated animate__fadeInLeft bg-primary-800 h-[570px] w-96 rounded-tl-[160px] rounded-br-[160px] rounded-tr-lg rounded-bl-lg border-t-secondary-200 border-l-secondary-200 border-2 py-8 px-10 shadow-secondary-200 shadow-lg -mt-10">
            <div className="flex flex-col items-center justify-center">
              <Avatar
                src="https://i.ibb.co/MyHZtbM/profile-pic-6.png"
                alt="avatar"
                size="xxl"
                className="border-4 border-secondary-200 shadow-secondary-200 shadow-md "
              />
              <Typography variant="h4" className="text-secondary-200 mt-2">
                Sheikh Shihab Hossain
              </Typography>
              <Typography variant="paragraph" className="text-primary-400">
                Full Stack Developer
              </Typography>
            </div>

            <div className="mt-5">
              <Typography
                variant="paragraph"
                className="flex items-center gap-4 my-2 text-primary-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6 text-secondary-200"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 9v.906a2.25 2.25 0 0 1-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 0 0 1.183 1.981l6.478 3.488m8.839 2.51-4.66-2.51m0 0-1.023-.55a2.25 2.25 0 0 0-2.134 0l-1.022.55m0 0-4.661 2.51m16.5 1.615a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V8.844a2.25 2.25 0 0 1 1.183-1.981l7.5-4.039a2.25 2.25 0 0 1 2.134 0l7.5 4.039a2.25 2.25 0 0 1 1.183 1.98V19.5Z"
                  />
                </svg>
                meet2shihab18@gmail.com
              </Typography>

              <Typography
                variant="paragraph"
                className="flex items-center gap-4 my-2 text-primary-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6  text-secondary-200"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                  />
                </svg>
                Khulna, Bangladesh
              </Typography>

              <Typography
                variant="paragraph"
                className="flex items-center gap-4 my-2 text-primary-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6 text-secondary-200"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"
                  />
                </svg>
                Intern / Full Time / Freelance
              </Typography>
            </div>

            <div className="flex items-center justify-around flex-wrap gap-2 mt-5">
              <Chip
                size="lg"
                value="HTML"
                className="bg-secondary-200 text-primary-800 font-bold"
              />
              <Chip
                size="lg"
                value="CSS"
                className="bg-secondary-200 text-primary-800 font-bold"
              />
              <Chip
                size="lg"
                value="JS"
                className="bg-secondary-200 text-primary-800 font-bold"
              />
              <Chip
                size="lg"
                value="React"
                className="bg-secondary-200 text-primary-800 font-bold"
              />
              <Chip
                size="lg"
                value="Node Js"
                className="bg-secondary-200 text-primary-800 font-bold"
              />
              <Chip
                size="lg"
                value="Express Js"
                className="bg-secondary-200 text-primary-800 font-bold"
              />
              <Chip
                size="lg"
                value="MongoDB"
                className="bg-secondary-200 text-primary-800 font-bold"
              />
            </div>

            <div className="flex items-center justify-center ">
              <Button className="bg-primary-200 text-primary-900 capitalize mt-5 flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                  />
                </svg>
                Download CV
              </Button>
            </div>
          </div>

          <div className="animate__animated animate__fadeInUp text-left flex flex-col items-start justify-start -mb-20">
            <h1 className="text-4xl text-white lg:text-5xl font-normal text-left py-10">
              Hey
            </h1>
            <h1 className="text-4xl text-white -my-16 lg:text-5xl font-normal text-left py-10">
              I am
              <span className="font-bold text-secondary-200 ml-2">
                <TypeAnimation
                  sequence={[
                    "Sheikh",
                    1000,
                    "Shihab",
                    1000,
                    "Hossain",
                    1000,
                    "Sheikh",
                    1000,
                    "Shihab",
                    1000,
                    "Hossain",
                    1000,
                  ]}
                  speed={50}
                  repeat={Infinity}
                />
              </span>
            </h1>
            <h1 className="text-4xl text-white lg:text-5xl font-normal text-left py-10">
              Full Stack Developer
            </h1>

            <div className="flex gap-3">
              <Link to={"https://github.com/iamshihab2020"}>
                <FaGithub className="shadow-lg duration-200 hover:shadow-secondary-200 text-5xl text-blue-600 "/>
              </Link>
              <Link to={"https://www.linkedin.com/in/sheikh-shihab-hossain/"}>
                <FaLinkedin className="shadow-lg duration-200 hover:shadow-secondary-200 text-5xl text-primary-500 " />
              </Link>
            </div>

          </div>
        </div>

        <div className="bg-primary-900 animate__animated animate__fadeInRight mt-20 flex flex-col items-center justify-center gap-y-3 shadow-md p-10 rounded-3xl shadow-secondary-200 border-secondary-200 border">
          <div className="flex items-start justify-start gap-2 ">
            <Typography variant="h1" className="text-secondary-200">
              4
            </Typography>
            <Typography variant="paragraph" className="text-primary-200">
              Programming <br /> Language
            </Typography>
          </div>
          <div className="flex items-start justify-start gap-2 ">
            <Typography variant="h1" className="text-secondary-200">
              6
            </Typography>
            <Typography variant="paragraph" className="text-primary-200">
              Development <br /> Tools
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeContent;
