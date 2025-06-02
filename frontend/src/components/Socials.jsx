import {
  BiLogoFacebook,
  BiLogoInstagramAlt,
  BiLogoLinkedin,
  BiLogoGithub,
} from 'react-icons/bi';

const socials = [
  {
    icon: <BiLogoFacebook />,
    path: '',
  },
  {
    icon: <BiLogoInstagramAlt />,
    path: 'https://www.instagram.com/thedevshanto/',
  },
  {
    icon: <BiLogoGithub />,
    path: 'https://github.com/thedevshanto',
  },
  {
    icon: <BiLogoLinkedin />,
    path: 'https://www.linkedin.com/in/thedevshanto/',
  },
];

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <div key={index} className={iconStyles}>
            <a
              key={index}
              href={item.path}
              target="_blank"
              rel="noopener noreferrer"
              className={iconStyles}
            >
              {item.icon}
            </a>
          </div>
        );
      })}
    </div>
  );
};

export default Socials;
