/* eslint-disable react/prop-types */
import { Line } from "rc-progress";

const ProgressBar = ({title, per}) => {
  return (
    <div className="flex gap-5">
      <span className="text-primary-200 font-semibold text-xl">{title}</span>
      <Line
        percent={per}
        strokeWidth={3}
        strokeColor="#12F7D5"
        trailWidth={1}
      />
    </div>
  );
};

export default ProgressBar;
