import { motion } from 'framer-motion';
//ui
import { ScrollArea } from '@/components/ui/scroll-area';
//components
import Stats from '@/components/abouts/Stats';
import Testimonial from '@/components/abouts/Testimonial';
import Info from '@/components/abouts/Info';
import Journey from '@/components/abouts/Journey';
import Skills from '@/components/abouts/Skills';
import OptimizedImage from '@/components/OptimizedImage';
import Blob from '@/components/Blob';
import Socials from '@/components/Socials';

const About = () => {
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
      <div className="container mx-auto px-0">
        <div className="flex flex-col items-center xl:flex-row gap-24 w-full h-[680px]">
          {/* img and social icons */}
          <div className="hidden flex-col xl:flex w-full h-full pt-14 max-w-[430px] relative">
            <OptimizedImage
              src="/allsvg/Shanto_avatar.png"
              alt="avatar"
              width={320}
              height={496}
              className="z-20 relative -top-4 -right-16 "
            />
            {/* overlay */}
            <div className="w-full h-[80px] absolute left-0 top-[400px] right-0 bg-gradient-to-t from-primary via-primary/100 z-30"></div>
            {/* blob */}
            <div className="absolute top-[80px] left-[20px] z-10">
              <Blob containerStyles="w-[420px] h-[420px]" />
            </div>
            {/* social icons */}
            <Socials
              containerStyles="flex gap-4 z-40 w-max transform translate-x-[80px]"
              iconStyles="w-[48px] h[48px] text-[22px] text-accent hover:text-accent-hover trantion-all flex items-center justify-center rounded-full cursor-pointer"
            />
          </div>
          {/* scroll area */}
          <ScrollArea className="w-full h-[680px]">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <p>About me</p>
              </div>
              <h2 className="h2 mb-6">
                <span className="text-accent">Abu Sayed</span> Shanto
              </h2>
              <p className="max-w-[540px] mb-12">
                I focus on crafting visually stunning, user-friendly web
                Experiences that not only look great but also function
                seamlessly, ensuring every detail is carefully designed and
                executed.
              </p>
              {/*  */}
              <div className="flex flex-col gap-16 items-start">
                <Stats />
                <Testimonial />
                <Info />
                <Journey />
                <Skills />
              </div>
            </div>
          </ScrollArea>
        </div>
      </div>
    </MotionElem>
  );
};

export default About;
