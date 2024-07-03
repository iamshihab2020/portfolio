import { useEffect, useState } from "react";
import {
  Card,
  CardBody,
  CardFooter,
  Button,
} from "@material-tailwind/react";

import "./CSS/style.css"

const Skills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    fetch("skill.json")
      .then((response) => response.json())
      .then((data) => setSkills(data))
      .catch((error) => console.error("Error fetching the projects:", error));
  }, []);
  return (
    <div className="animate__animated animate__fadeInDown w-full py-20 px-5 md:px-10 lg:px-20">
      <h1 className="text-5xl lg:text-6xl text-secondary-200 font-bold text-center py-10 ">
        My Skills
      </h1>
      <div className="flex items-center justify-center">
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-y-6 gap-x-10 ">
          {skills.map((skill, index) => (
            <Card
              className="card mt-6 max-w-96 bg-primary-500 hover:shadow-secondary-200 duration-200"
              key={index}
            >
              <CardBody className=" flex flex-col items-center justify-center ">
                <img src={skill.img} alt="" className="h-24 " />
              </CardBody>
              <CardFooter className="pt-0">
                <div className=" flex items-center justify-center">
                  <Button
                    size="sm"
                    className="flex items-center gap-2 capitalize bg-primary-900 text-primary-400 hover-bg-change "
                  >
                    {skill.rate}
                  </Button>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
