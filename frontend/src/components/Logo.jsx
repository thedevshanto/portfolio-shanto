import { Link } from 'react-router';

const Logo = () => {
  return (
    <Link to="/" className="text-[28px] font-normal">
      Shanto<span className="text-accent text-4xl">.</span>
    </Link>
  );
};

export default Logo;
