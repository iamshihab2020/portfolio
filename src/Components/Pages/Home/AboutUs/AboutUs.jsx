import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const AboutUs = () => {
  return (
    <div className="bg-hero bg-no-repeat bg-center bg-cover w-full min-h-screen pb-14">
      <div className="py-14">
        <h1 className="animate__animated animate__fadeInDown text-5xl lg:text-6xl text-secondary-200 font-bold text-center py-10 ">
          About Me
        </h1>{" "}
      </div>

      <div>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#12f7d5", color: "#1a1e23" }}
            contentArrowStyle={{ borderRight: "7px solid  #12f7d5" }}
            iconStyle={{ background: "#12f7d5", color: "#b4b9c0" }}
          >
            <h3 className="vertical-timeline-element-title font-bold">
              Sheikh Shihab Hossain
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Khulna, Bangladesh</h4>
            <p className="text-right font-extrabold">
              Frontend Web Developer
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#12f7d5", color: "#1a1e23" }}
            contentArrowStyle={{ borderRight: "7px solid  #12f7d5" }}
            iconStyle={{ background: "#12f7d5", color: "#b4b9c0" }}
          >
            <h3 className="vertical-timeline-element-title font-bold">From</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Khulna, Bangladesh
            </h4>

          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#12f7d5", color: "#1a1e23" }}
            contentArrowStyle={{ borderRight: "7px solid  #12f7d5" }}
            iconStyle={{ background: "#12f7d5", color: "#b4b9c0" }}
          >
            <h3 className="vertical-timeline-element-title font-bold">Education</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Bachelor of Science in CSE - (2019 - 2023)
            </h4>
            <p>
              Northern University of Business and Technology 
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "#12f7d5", color: "#1a1e23" }}
            contentArrowStyle={{ borderRight: "7px solid  #12f7d5" }}
            iconStyle={{ background: "#12f7d5", color: "#b4b9c0" }}
          >
            <h3 className="vertical-timeline-element-title font-bold">Certification</h3>
            <h4 className="vertical-timeline-element-subtitle">
              Certified MERN Stack Developer
            </h4>
            <p className="text-right">
              Programming Hero
            </p>
          </VerticalTimelineElement>


        </VerticalTimeline>
      </div>
    </div>
  );
};

export default AboutUs;
