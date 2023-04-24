import { BtnWraper, Btn } from './BtnLoadMore.styled';

export const BtnLoadMore = ({ onClick }) => {
  return (
    <BtnWraper>
      <Btn onClick={onClick} type="button">
        Load more
      </Btn>
    </BtnWraper>
  );
};
