//icons
import {
  RiReactjsFill,
  RiNextjsFill,
  RiHtml5Fill,
  RiCss3Fill,
  RiTailwindCssFill,
  RiNodejsFill,
} from 'react-icons/ri';

import { SiTypescript, SiMongodb } from 'react-icons/si';

//tool components
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';

const skills = [
  {
    name: 'React',
    icon: <RiReactjsFill />,
  },
  {
    name: 'Next.js',
    icon: <RiNextjsFill />,
  },
  {
    name: 'Typescript',
    icon: <SiTypescript />,
  },
  {
    name: 'MongoDB',
    icon: <SiMongodb />,
  },
  {
    name: 'Tailwind CSS',
    icon: <RiTailwindCssFill />,
  },
  {
    name: 'Node.js',
    icon: <RiNodejsFill />,
  },
];

const Skills = () => {
  return (
    <div>
      <h2 className="h2 mb-8">
        My <span className="text-accent">Skills</span>
      </h2>
      <div className="flex flex-wrap gap-6 max-w-sm xl:max-w-none">
        {skills.map((skill, index) => {
          return (
            <TooltipProvider key={index}>
              <Tooltip>
                <TooltipTrigger className="w-16 h-16 rounded-full flex items-center justify-center bg-tertiary/70 group">
                  <div className="text-3xl group-hover:text-accent transition-all duration-300">
                    {skill.icon}
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p className="text-lg">{skill.name}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
