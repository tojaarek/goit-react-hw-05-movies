import { Link } from './Button.styled';
import { useLocation } from 'react-router-dom';

const Button = () => {
  const location = useLocation();

  return <Link to={location.state.from}>Go back</Link>;
};

export default Button;
