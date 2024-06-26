import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
  List,
  ListItem,
} from "@material-tailwind/react";

import {
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";



function NavList() {
  return (
    <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
      <Typography
        as="a"
        href="#"
        variant="large"
        className="font-medium text-secondary-200"
      >
        <ListItem className="bg-transparent hover:bg-transparent hover:text-white flex items-center gap-2 py-2 pr-4">Home</ListItem>
      </Typography>

      <Typography
        as="a"
        href="#"
        variant="large"
        className="font-medium text-secondary-200"
      >
        <ListItem className="bg-transparent hover:bg-transparent hover:text-white flex items-center gap-2 py-2 pr-4">
          Blogs
        </ListItem>
      </Typography>

      <Typography
        as="a"
        href="#"
        variant="large"
        className="font-medium text-secondary-200"
      >
        <ListItem className="bg-transparent hover:bg-transparent hover:text-white flex items-center gap-2 py-2 pr-4">
          Contact
        </ListItem>
      </Typography>
    </List>
  );
}

const logo = ("<S/>");

export function MainNavBar() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <Navbar className="animate__animated animate__fadeInDown mx-auto max-w-full px-4 py-2 bg-primary-900 rounded-none border-none  shadow-secondary-200 shadow-md">
      <div className="flex items-center justify-between">
        <Typography
          as="a"
          href="#"
          variant="h5"
          className="mr-4 cursor-pointer py-1.5 lg:ml-2 text-secondary-200"
        >
          {logo} <span className="text-white">Shihab Dev</span>
        </Typography>
        <div className="hidden lg:block">
          <NavList />
        </div>
        {/* <div className="hidden gap-2 lg:flex">
          <Button variant="text" size="sm" color="blue-gray">
            Log In
          </Button>
          <Button variant="gradient" size="sm">
            Sign In
          </Button>
        </div> */}
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
        {/* <div className="flex w-full flex-nowrap items-center gap-2 lg:hidden">
          <Button variant="outlined" size="sm" color="blue-gray" fullWidth>
            Log In
          </Button>
          <Button variant="gradient" size="sm" fullWidth>
            Sign In
          </Button>
        </div> */}
      </Collapse>
    </Navbar>
  );
}
