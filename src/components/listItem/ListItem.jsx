import {
  LogoImg,
  AvatarImg,
  AvatarFrame,
  Text,
  ButtonFollow,
} from '../userList/UserList.styled';
import Logo from '../../assets/logo.png';
import { changeUser } from '../../service/Api';
import { useState, useEffect } from 'react';

export const ListItem = ({ item, onFollow }) => {
  const { id, tweets, followers, avatar, user } = item;
  const [totallFollowers, setTotallFollowers] = useState(followers);
  const [isFollowed, setIsFollowed] = useState(false);
  const kFollowers = totallFollowers
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  useEffect(() => {
    if (onFollow?.some(user => user.id === id)) {
      setIsFollowed(true);
    }
  }, [onFollow, id]);

  const handleChangeFollow = () => {
    updateLocalStorage();
    changeAPI();
    updateTotallFollowers();
  };

  const updateLocalStorage = () => {
    setIsFollowed(!isFollowed);
    if (isFollowed) {
      const newArr = JSON.parse(localStorage.getItem('onFollow')).filter(
        user => user.id !== id
      );
      localStorage.setItem('onFollow', JSON.stringify(newArr));
    } else {
      if (localStorage.getItem('onFollow')) {
        localStorage.setItem(
          'onFollow',
          JSON.stringify([
            ...JSON.parse(localStorage.getItem('onFollow')),
            { id, user },
          ])
        );
      } else {
        localStorage.setItem('onFollow', JSON.stringify([{ id, user }]));
      }
    }
  };

  async function changeAPI() {
    try {
      await changeUser(
        id,
        isFollowed ? Number(totallFollowers) - 1 : Number(totallFollowers) + 1
      );
    } catch (error) {
      console.log(error);
    }
  }
  const updateTotallFollowers = () => {
    isFollowed
      ? setTotallFollowers(Number(totallFollowers) - 1)
      : setTotallFollowers(Number(totallFollowers) + 1);
  };

  return (
    <>
      <LogoImg src={Logo} alt="logo" />
      <AvatarFrame>
        <AvatarImg src={avatar} alt="avatar" width={62} />
      </AvatarFrame>
      <Text>
        {tweets} <span>TWEETS</span>{' '}
      </Text>
      <Text>
        {kFollowers} <span>FOLLOWERS</span>
      </Text>
      <ButtonFollow
        type="submit"
        onClick={() => handleChangeFollow(user)}
        style={{ backgroundColor: isFollowed && '#5cd3a8' }}
      >
        {isFollowed ? <>Following </> : <> Follow</>}
      </ButtonFollow>
    </>
  );
};
