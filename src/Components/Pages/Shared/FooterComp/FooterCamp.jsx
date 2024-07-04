import { Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";

export function FooterCamp() {
  return (
    <footer className="w-full  border-t border-secondary-200 py-6">
      <Typography
        color="blue-gray"
        className="font-normal text-center text-secondary-200 "
      >
        &copy; All right reserved by <Link to={"/"}>Sheikh Shihab Hossain</Link>
      </Typography>
    </footer>
  );
}
