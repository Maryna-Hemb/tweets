import styled from 'styled-components';
import BgImage from '../../assets/bg_picture.png';
import Frame from '../../assets/avatar_frame.png';

const List = styled.ul`
  display: flew;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  padding: 10px;
  font-size: 20px;
  color: #ebd8ff;
  font-family: 'Montserrat';
`;

const Item = styled.li`
  width: 379px;
  height: 460px;
  border: 1px solid #000000;
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.24);
  border-radius: 20px;

  background-image: url(${BgImage}),
    linear-gradient(114.99deg, #471ca9 -0.99%, #5736a3 54.28%, #4b2a99 78.99%);
  background-repeat: no-repeat;
  background-position: 36px 28px, 0px 0px;

  list-style: none;

  &:hover,
  &:focus {
    scale: 1.02;
  }
`;
const LogoImg = styled.img`
  display: block;
  margin-top: 20px;
  margin-left: 20px;
`;
const AvatarFrame = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  margin-top: 136px;
  margin-bottom: 26px;
  background-image: url(${Frame});
  background-repeat: no-repeat;
  background-position: -6px 0px;
`;

const AvatarImg = styled.img`
  display: block;
  border-radius: 50%;
`;
const Text = styled.p`
  margin-top: 0;
  margin-bottom: 16px;
  font-weight: 500;
  text-align: center;
`;

const ButtonFollow = styled.button`
  display: block;
  width: 196px;
  padding: 14px 0px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 26px;
  margin-bottom: 36px;
  font-family: 'Montserrat';
  font-weight: 600;
  font-size: 18px;
  background-color: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
`;

export { List, Item, LogoImg, AvatarImg, AvatarFrame, Text, ButtonFollow };
