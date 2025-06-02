import React from 'react';
import { Link, useLocation } from 'react-router';

const links = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'About',
    path: '/about',
  },
  {
    name: 'Contact',
    path: '/contact',
  },
  {
    name: 'Services',
    path: '/services',
  },
  {
    name: 'My Works',
    path: '/works',
  },
];

const NavLinks = ({ containerStyles }) => {
  const { pathname } = useLocation();

  return (
    <ul className={containerStyles}>
      {links.map((link, index) => {
        // determine if the current link matches the active route
        const isActive = pathname === link.path;
        // calculate the number of characters in the link name
        const charLength = link.name.length;
        // set the line width based on character length
        const lineWidth = charLength > 1 ? 'after:w-[120%]' : 'after:w-[90%]';
        console.log(charLength);

        return (
          <li key={index}>
            <Link
              to={link.path}
              className={`relative text-lg uppercase text-white 
                ${
                  isActive &&
                  `after:content-[''] after:block after:absolute 
                after:left-0 after:top-1/2 ${lineWidth} after:h-[4px] 
                after:bg-accent after:-translate-y-1/2 after:z-0`
                }`}
            >
              <span className="relative z-10">{link.name}</span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default NavLinks;
