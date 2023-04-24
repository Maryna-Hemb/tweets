import { Link, useLocation } from 'react-router-dom';
import { Text, SectionHome, BtnWraper, Btn } from './HomePageContent.styled';

export const HomePageContent = () => {
  const location = useLocation();
  return (
    <SectionHome>
      <Text>
        Are you interested in following people`s tweets in our resource? So this
        App is for you! You can find all the necessary statistics here, just
        start looking for...
      </Text>
      <BtnWraper>
        <Link to={`/tweets`} state={{ from: location }}>
          <Btn type="button">Tweets</Btn>
        </Link>
      </BtnWraper>
    </SectionHome>
  );
};
