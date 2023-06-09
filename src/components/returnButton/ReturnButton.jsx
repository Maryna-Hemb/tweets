import { BsArrowLeftShort } from 'react-icons/bs';
import { ButtonContainer, ButtonLink } from './ReturnButton.styled';

export const ReturnButton = ({ locationBack }) => {
  return (
    <ButtonContainer>
      <ButtonLink to={locationBack}>
        <BsArrowLeftShort size={20} />
        Go bacK
      </ButtonLink>
    </ButtonContainer>
  );
};
