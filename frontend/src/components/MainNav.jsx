import { MdFileDownload } from 'react-icons/md';
//components
import Logo from './Logo';
import NavLinks from './NavLinks';

const MainNav = () => {
  return (
    <nav className="w-full pt-16">
      <div className="flex flex-col items-center justify-between h-full">
        {/* logo */}
        <Logo />
        {/* nav links */}
        <NavLinks containerStyles="flex flex-col gap-6" />
        {/* download cv button */}
        <a
          href="/shanto_resume.pdf"
          download
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="btn btn-tertiary btn-lg mb-16">
            <div className="flex items-center gap-3">
              <span>Download CV</span>
              <MdFileDownload className="text-xl" />
            </div>
          </button>
        </a>
      </div>
    </nav>
  );
};

export default MainNav;
