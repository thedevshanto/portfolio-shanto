import { motion } from 'framer-motion';
// Import necessary modules and components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
//ui
import { MdOutlineArrowOutward, MdArrowRightAlt } from 'react-icons/md';
//components
import OptimizedImage from '@/components/OptimizedImage';

//data
const services = [
  {
    icon: '/allsvg/services/design.svg',
    href: '',
    title: 'Frontend Development with React & Tailwind',
  },
  {
    icon: '/allsvg/services/frontend.svg',
    href: '',
    title: 'Authentication & Authorization',
  },
  {
    icon: '/allsvg/services/backend.svg',
    href: '',
    title: 'Database Design & API Integration',
  },
  {
    icon: '/allsvg/services/seo.svg',
    href: '',
    title: 'Full-Stack Web Application Development',
  },
  {
    icon: '/allsvg/services/video.svg',
    href: '',
    title: 'Deployment & Hosting',
  },
];

const Services = () => {
  const MotionElem = motion.section;
  return (
    <MotionElem
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: 'easeIn' },
      }}
      className="h-full flex items-center"
    >
      <div className="container mx-auto w-full flex flex-col gap-16">
        {/* text */}
        <div className="flex flex-col xl:flex-row justify-between items-start xl:items-center gap-8">
          {/* heading */}
          <h2 className="h2 max-w-[480px] text-left xl:mb-0">
            Custom <span className="text-accent">Web Solutions </span>
            to Boost Your Business
          </h2>
          {/* button */}
          <button className="btn btn-lg btn-accent flex gap-2">
            All services <MdArrowRightAlt className="text-2xl" />
          </button>
        </div>
        {/* slider */}
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          modules={[Pagination]}
          className="h-[320px]"
        >
          {services.map((service, index) => {
            return (
              <SwiperSlide key={index}>
                <div className="bg-secondary/90 w-full h-[284px] px-[30px] py-[40px] flex flex-col justify-between rounded-2xl ">
                  <div className="flex items-center justify-between mb-12">
                    <OptimizedImage
                      src={service.icon}
                      alt=""
                      width={48}
                      height={48}
                    />
                    <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center cursor-pointer text-2xl hover:rotate-45 transition-all">
                      <MdOutlineArrowOutward />
                    </div>
                  </div>
                  <h5 className="text-[22px] font-medium max-w-240px">
                    {service.title}
                  </h5>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </MotionElem>
  );
};

export default Services;
