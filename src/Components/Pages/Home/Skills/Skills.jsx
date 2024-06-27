import ProgressBar from "../../Shared/ProgressBar/ProgressBar";
// import Marquee from "react-fast-marquee";
const Skills = () => {
  return (
    <div className="w-full py-14 px-5 md:px-10 lg:px-20">
      <h1 className="animate__animated animate__fadeInDown text-5xl lg:text-6xl text-secondary-200 font-bold text-center py-10 ">
        My Skills
      </h1>
      <div className="mt-10 grid grid-row-1 lg:grid-cols-2 gap-y-6 gap-x-10">
        <ProgressBar title={"HTML"} per={95} />
        <ProgressBar title={"CSS"} per={95} />
        <ProgressBar title={"TailwindCSS"} per={95} />
        <ProgressBar title={"Bootstrap"} per={95} />
        <ProgressBar title={"Bootstrap"} per={95} />
        <ProgressBar title={"JS"} per={90} />
        <ProgressBar title={"ReactJS"} per={92} />
        <ProgressBar title={"NodeJS"} per={85} />
        <ProgressBar title={"ExpressJS"} per={83} />
        <ProgressBar title={"MongoDB"} per={83} />
      </div>

      {/* <div className="z-10">
        <Marquee>
          <img src="../../../../assets/html.png" alt="" className="h-48" />
          <img src="../../../../assets/css.png" alt="" className="h-48" />
          <img src="../../../../assets/tailwind.png" alt="" className="h-48" />
          <img src="../../../../assets/bootstrap.png" alt="" className="h-48" />
          <img src="../../../../assets/js.png" alt="" className="h-48" />
          <img src="../../../../assets/react.png" alt="" className="h-48" />
          <img src="../../../../assets/node.png" alt="" className="h-48" />
        </Marquee>
      </div> */}

    </div>
  );
};

export default Skills;
