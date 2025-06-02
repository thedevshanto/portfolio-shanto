import { motion } from 'framer-motion';
import { Link } from 'react-router';
// Import necessary modules and components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

//tabs components
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

//icons
import { MdArrowOutward } from 'react-icons/md';
import { FaGithub } from 'react-icons/fa';
//componets
import OptimizedImage from '@/components/OptimizedImage';
import { Link2 } from 'lucide-react';

//data
const projects = [
  {
    id: 1,
    catagory: 'frontend',
    title: 'LaunchWave Landing Page',
    description: 'React + Tailwind responsive landing page',
    image: '/allsvg/work/thumb1.png',
    link: '',
    github: '',
    tech: ['React', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    id: 2,
    catagory: 'fullstack',
    title: 'TaskTrackr App',
    description: 'Fullstack MERN productivity tracker',
    image: '/allsvg/work/thumb2.png',
    link: '',
    github: '',
    tech: ['React', 'Node.js', 'MongoDB', 'Express'],
  },
  {
    id: 3,
    catagory: 'frontend',
    title: 'EazyShop UI',
    description: 'E-commerce frontend using Tailwind & Redux',
    image: '/allsvg/work/thumb3.png',
    link: '',
    github: '',
    tech: ['React', 'Tailwind CSS', 'Redux Toolkit'],
  },
  {
    id: 4,
    catagory: 'fullstack',
    title: 'Blogify Platform',
    description: 'Blog site with login, posting, and rich-text editing',
    image: '/allsvg/work/thumb4.png',
    link: '',
    github: '',
    tech: ['React', 'Node.js', 'MongoDB', 'JWT'],
  },
  {
    id: 5,
    catagory: 'backend',
    title: 'API for Notes App',
    description: 'RESTful API with CRUD operations for a notes app',
    image: '/allsvg/work/thumb5.png',
    link: '',
    github: '',
    tech: ['Node.js', 'Express', 'MongoDB', 'Postman'],
  },
  {
    id: 6,
    catagory: 'frontend',
    title: 'Portfolio Website',
    description: 'Modern personal portfolio with animations',
    image: '/allsvg/work/thumb1.png',
    link: '',
    github: '',
    tech: ['React', 'Tailwind CSS', 'GSAP'],
  },
  {
    id: 7,
    catagory: 'fullstack',
    title: 'DevConnect Social App',
    description: 'Social media app for developers to connect',
    image: '/allsvg/work/thumb2.png',
    link: '',
    github: '',
    tech: ['MERN', 'Socket.io', 'Cloudinary'],
  },
  {
    id: 8,
    catagory: 'frontend',
    title: 'Crypto Dashboard',
    description: 'Live crypto prices with charting and APIs',
    image: '/allsvg/work/thumb3.png',
    link: '',
    github: '',
    tech: ['React', 'Chart.js', 'CoinGecko API'],
  },
  {
    id: 9,
    catagory: 'backend',
    title: 'Auth System API',
    description: 'Secure user auth with JWT and bcrypt',
    image: '/allsvg/work/thumb4.png',
    link: '',
    github: '',
    tech: ['Node.js', 'Express', 'JWT', 'MongoDB'],
  },
  {
    id: 10,
    catagory: 'frontend',
    title: 'WeatherNow App',
    description: 'Simple weather app using OpenWeatherMap API',
    image: '/allsvg/work/thumb5.png',
    link: '',
    github: '',
    tech: ['React', 'Tailwind CSS', 'Axios'],
  },
];

const catagories = ['frontend', 'backend', 'fullstack', 'uiux'];

const MyWorks = () => {
  const MotionElem = motion.section;
  return (
    <MotionElem
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' },
      }}
      className="min-h-screen flex items-center py-16 xl:py-0 "
    >
      <div className="container mx-auto w-full h-full flex flex-col justify-center">
        {/* heading */}
        <h2 className="h2 mb-6 xl:mb-12 max-w-[600px]">
          My Latest <span className="text-accent">Work</span>
        </h2>
        {/* tabs */}
        <Tabs
          defaultValue="frontend"
          className="w-full flex flex-col gap-6 xl:gap-12"
        >
          {/* tablist */}
          <TabsList className="flex flex-wrap justify-center items-center gap-4 h-full mb-4 xl:mb-0">
            {catagories.map(category => {
              return (
                <TabsTrigger
                  key={category}
                  value={category}
                  className="capitalize boder border-white/10 data-[state=active]:bg-accent data-[state-active]:bg-accent h-[48px] px-6 rounded-full cursor-pointer"
                >
                  {category}
                </TabsTrigger>
              );
            })}
          </TabsList>
          {/* tab content */}
          <div className="h-[400px] scrollbar scrollbar-thumb-accent scrollbar-track-accent/5 overflow-y-scroll xl:overflow-y-visible">
            {catagories.map(category => {
              return (
                <TabsContent key={category} value={category}>
                  <Swiper
                    modules={[Pagination]}
                    pagination={{ clickable: true, dynamicBullets: true }}
                    className="h-max xl:h-[460px]"
                  >
                    {projects
                      .filter(project => project.catagory === category)
                      .map(project => {
                        return (
                          <SwiperSlide key={project.id} className="h-full">
                            <div className="flex flex-col xl:flex-row gap-8 xl:gap-12">
                              {/* project info */}
                              <div className="w-full max-w-[380px] flex flex-col gap-6 xl:gap-8 xl:pt-6 order-2 xl:order-none">
                                {/*title  */}
                                <h3 className="h3">{project.title}</h3>
                                {/* description */}
                                <p className="text-muted-foreground text-sm leading-relaxed">
                                  {project.description}
                                </p>
                                {/* tech */}
                                <div className="xl:mb-4 max-w-[300px] min-h-[130px]">
                                  <p className="mb-4">Technologies Used</p>
                                  <ul className="flex flex-wrap gap-4">
                                    {project.tech.map((item, index) => {
                                      return (
                                        <li
                                          key={index}
                                          className="flex items-center gap-4 bg-[#a883ff]/13 h-[28px] px-[14px] rounded-full"
                                        >
                                          {item}
                                        </li>
                                      );
                                    })}
                                  </ul>
                                </div>
                                {/* buttons */}
                                <div className="flex flex-col sm:flex-row gap-4 items-start">
                                  <Link to={project.link}>
                                    <button className="btn btn-sm btn-accent flex gap-2">
                                      <MdArrowOutward className="text-xl hover:rotate-45 transition-all" />
                                      <span>Live Project</span>
                                    </button>
                                  </Link>
                                  <Link to={project.github}>
                                    <button className="btn btn-sm btn-white flex gap-2">
                                      <FaGithub className="text-xl" />
                                      <span>Live Project</span>
                                    </button>
                                  </Link>
                                </div>
                              </div>
                              {/* project image */}
                              <div className="w-full h-[250px] md:h-[300px] xl:h-[400px] relative bg-pink-50/10 order-1 xl:order-none rounded-lg overflow-hidden   ">
                                <OptimizedImage
                                  src={project.image}
                                  alt={project.img}
                                  fill
                                  className="object-cover"
                                />
                              </div>
                            </div>
                          </SwiperSlide>
                        );
                      })}
                  </Swiper>
                </TabsContent>
              );
            })}
          </div>
        </Tabs>
      </div>
    </MotionElem>
  );
};

export default MyWorks;
