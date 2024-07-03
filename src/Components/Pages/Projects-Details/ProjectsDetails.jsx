import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Typography, Spinner, Button } from "@material-tailwind/react";

const ProjectsDetails = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    fetch(`/projects.json`)
      .then((response) => response.json())
      .then((data) => {
        const projectDetails = data.find((proj) => proj.id === parseInt(id));
        setProject(projectDetails);
      })
      .catch((error) =>
        console.error("Error fetching the project details:", error)
      );
  }, [id]);

  if (!project) {
    return (
      <div>
        <Spinner />
      </div>
    );
  }

  return (
    <div className="animate__animated animate__zoomIn  flex justify-start md:justify-around items-center md:items-start gap-5 flex-col md:flex-row min-h-screen px-5 py-8 lg:py-10">
      <div>
        <Link to={project.live}>
          <img src={project.image} alt="" className=" max-full lg:max-w-3xl" />
        </Link>
        <div className="flex justify-between mt-5">
          <Link to={project.live}>
            <Button
              value="large"
              className="bg-secondary-200 text-primary-900 capitalize font-['Kanit'] text-base "
            >
              Live
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
        </div>
      </div>
      <div>
        <Typography
          variant="h2"
          className="text-secondary-200 text-2xl lg:text-4xl"
        >
          {project.name}
        </Typography>
        <Typography
          variant="h4"
          className="text-secondary-100 text-xl lg:text-2xl mt-4"
        >
          Description:
        </Typography>
        <Typography
          variant="paragraph"
          className="text-secondary-50 text-base lg:text-lg mt-2 text-justify font-normal "
        >
          {project.description}
        </Typography>
      </div>
    </div>
  );
};

export default ProjectsDetails;
