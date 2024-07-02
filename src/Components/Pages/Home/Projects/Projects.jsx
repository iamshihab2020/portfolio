import { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "./CSS/styles.css";
import { EffectCoverflow, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("projects.json")
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error("Error fetching the projects:", error));
  }, []);

  return (
    <div className="w-full  pb-14">
      <div className="py-14">
        <h1 className="animate__animated animate__fadeInDown text-5xl lg:text-6xl text-secondary-200 font-bold text-center py-10">
          Projects
        </h1>
      </div>

      <div className="flex items-center justify-center -mt-5 w-full">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={true}
          modules={[EffectCoverflow, Pagination]}
          className="mySwiper"
          style={{ height: "500px", width: "100%" }}
        >
          {projects.map((project, index) => (
            <SwiperSlide
              key={index}
              style={{ display: "flex", justifyContent: "center" }}
              className="gap-5 swiper-slide "
            >
              <Card className=" bg-primary-700 transition-all duration-200 hover:shadow-lg hover:shadow-secondary-200 hover:border-2 hover:border-secondary-200">
                <CardHeader color="blue-gray" className="relative h-56">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full min-h-full object-cover"
                  />
                </CardHeader>
                <CardBody>
                  <Typography
                    variant="h5"
                    color="blue-gray"
                    className="mb-2 font-['Kanit'] text-secondary-200"
                  >
                    {project.name}
                  </Typography>
                </CardBody>

                <CardFooter className="pt-0 flex justify-between items-end">
                  <Link to={project.live}>
                    <Button
                      value="large"
                      className="bg-secondary-200 text-primary-900 capitalize font-['Kanit'] text-base "
                    >
                      Live
                    </Button>
                  </Link>
                  <Link to={`/project-details/${project.id}`}>
                    <Button
                      value="large"
                      className="px-0 bg-transparent text-secondary-200 border-none outline-none hover:border-none shadow-none  "
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-7"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                        />
                      </svg>
                    </Button>
                  </Link>
                  <Link to={project.github}>
                    <Button
                      value="large"
                      className="bg-secondary-200 text-primary-900 capitalize font-['Kanit'] text-base "
                    >
                      Github
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Projects;
