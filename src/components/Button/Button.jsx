import { ButtonBack } from './Button.styled';
import { useNavigate } from 'react-router-dom';

const Button = () => {
  const navigate = useNavigate();

  return <ButtonBack onClick={() => navigate(-1)}>Go back</ButtonBack>;
};

export default Button;
