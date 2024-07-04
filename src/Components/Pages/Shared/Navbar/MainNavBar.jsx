import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
  List,
  ListItem,
} from "@material-tailwind/react";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";

function NavList() {
  return (
    <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
      <NavLink to={"/"}>
        <Typography
          as="a"
          variant="large"
          className="font-medium text-secondary-200"
        >
          <ListItem className="bg-transparent hover:bg-transparent hover:text-white flex items-center gap-2 py-2 pr-4">
            Home
          </ListItem>
        </Typography>
      </NavLink>

      <NavLink to={"/#skill"}>
        <Typography
          as="a"
          variant="large"
          className="font-medium text-secondary-200"
        >
          <ListItem className="bg-transparent hover:bg-transparent hover:text-white flex items-center gap-2 py-2 pr-4">
            Skills
          </ListItem>
        </Typography>
      </NavLink>

      <NavLink to={"/#contact"}>
        <Typography
          as="a"
          variant="large"
          className="font-medium text-secondary-200"
        >
          <ListItem className="bg-transparent hover:bg-transparent hover:text-white flex items-center gap-2 py-2 pr-4">
            Contact
          </ListItem>
        </Typography>
      </NavLink>
    </List>
  );
}

const logo = "<S/>";

export function MainNavBar() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <Navbar className="animate__animated animate__fadeInDown mx-auto max-w-full px-4 py-2 bg-primary-700 rounded-none border-none shadow-secondary-200 shadow-sm rounded-b-lg">
      <div className="flex items-center justify-center">
        <Typography
          as="a"
          href="#"
          variant="h5"
          className="mr-4 cursor-pointer py-1.5 lg:ml-2 text-secondary-200"
        >
          {logo} <span className="text-white font-['Kanit'] ">Shihab Dev</span>
        </Typography>
        <div className="hidden lg:block font-['Kanit]">
          <NavList />
        </div>
        <IconButton
          variant="text"
          color="blue-gray"
          className="lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6 text-secondary-200" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6 text-secondary-200" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </Navbar>
  );
}