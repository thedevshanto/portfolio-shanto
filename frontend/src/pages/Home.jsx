import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { MdArrowOutward } from 'react-icons/md';
import { HiOutlineMail, HiOutlinePhone } from 'react-icons/hi';
import { Link } from 'react-router';

// components
import Blob from '@/components/Blob';
import OptimizedImage from '@/components/OptimizedImage';
import Socials from '@/components/Socials';
import Pattern from '@/components/Pattern';

const Home = () => {
  const MotionElem = motion.section;
  return (
    <MotionElem
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' },
      }}
      className="h-screen flex items-center"
    >
      {/* pattern */}
      <Pattern />
      <div className="flex flex-col xl:flex-row items-center justify-between w-full">
        {/* text */}
        <div className="w-full xl:w-[550px] flex flex-col items-center xl:items-start text-center xl:text-left">
          <h1 className="text-[28px] md:text-[30px] xl:text-[32px] leading-[1] tracking-tight font-extrabold flex-1 mb-[28px]">
            Hi, I am <span>Shanto</span>,
            <br />
            <TypeAnimation
              sequence={[
                '- Frontend Developer',
                2000,
                '- Backend Developer',
                2000,
                '- MERN Stack Developer',
                2000,
              ]}
              wrapper="span"
              speed={40}
              repeat={Infinity}
              cursor={false}
              className="text-accent"
            />
          </h1>
          <p className="max-w-[500px] mb-[44px]">
            I build visually captivating, user-friendly websites and web
            applications that transform your ideas into seamless, engaging
            digital experiences.
          </p>
          <button className="btn btn-accent btn-lg mb-16">
            <div>
              <Link to="/contact" className="flex items-center gap-3">
                <span>Let's talk</span>
                <MdArrowOutward className="text-xl" />
              </Link>
            </div>
          </button>
          {/* contact info */}
          <div className="flex flex-col gap-4 xl:gap-8 xl:flex-row xl:items-center mb-12 xl:mb-0">
            {/* phone */}
            <div className="flex items-center gap-4 text-lg">
              <span className="text-accent">
                <HiOutlinePhone className="text-xl" />
              </span>
              <span>+88 01943-505039</span>
            </div>
            {/* mail */}
            <div className="flex items-center gap-4 text-lg">
              <span className="text-accent">
                <HiOutlineMail className="text-xl" />
              </span>
              <span>thedevshanto@gmail.com</span>
            </div>
          </div>
          {/* socials */}
          <Socials
            containerStyles="flex 2xl:flex-col gap-6 xl:hidden 2xl:flex 2xl:absolute 2xl:top-1/2 2xl:right-2 2xl:transform 2xl:-translate-x-1/2 2xl:-translate-y-1/2"
            iconStyles="bg-accent text-white hover:bg-accent-hover transition w-[48px] h-[48px] text-[22px] flex items-center justify-center rounded-full cursor-pointer"
          />
        </div>
        {/* blob & image */}
        <div className="hidden xl:block flex-1 relative z-20">
          {/* blob */}
          <Blob containerStyles="w-[560px] h-[560px]" />
          {/* avatar image */}
          <OptimizedImage
            src="/allsvg/Shanto_avatar.png"
            alt="avatar"
            width={400}
            height={600}
            className="absolute -top-151 left-1/2 -translate-x-1/2"
          />
          {/* overlay gradient */}
          <div className="w-full h-[128px] absolute bottom-10 left-0 right-0 bg-gradient-to-t from-primary via-primary/100"></div>
        </div>
      </div>
    </MotionElem>
  );
};

export default Home;
