import ChuckNorrisLogo from '/joke-svgrepo-com.svg';

interface LogoProps {
  className?: string;
}

const Logo = ({ className }: LogoProps) => {
  return <img src={ChuckNorrisLogo} alt="ChuckNorrisLogo" className={className} />;
};

export default Logo;
