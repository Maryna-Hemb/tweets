import { useState, useEffect, useRef } from 'react';
import { fetcUsers } from '../service/Api';
import UserList from '../components/userList/UserList';
import { BtnLoadMore } from '../components/btnLoadMore/BtnLoadMore';
import { useLocation } from 'react-router-dom';
import ReturnButton from '../components/returnButton/ReturnButton';

const Tweets = () => {
  const [users, setUsers] = useState(null);
  const [status, setStatus] = useState('idle');
  const [showLoadMore, setShowLoadMore] = useState(false);
  const [page, setPage] = useState(1);
  const [onFollow, setOnFollow] = useState(null);

  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/');

  useEffect(() => {
    async function getUser() {
      try {
        const getUserInf = await fetcUsers(page);
        setStatus('resolved');
        setShowLoadMore(true);
        if (!users) {
          setUsers(getUserInf);
          return;
        }
        if (Math.ceil(getUserInf.length < 3)) {
          setShowLoadMore(false);
        }
        setUsers(prev => [...prev, ...getUserInf]);
      } catch (error) {
        console.log(error);
      }
    }
    getUser();
  }, [page]);

  useEffect(() => {
    if (localStorage.getItem('onFollow')) {
      setOnFollow(JSON.parse(localStorage.getItem('onFollow')));
    }
  }, []);

  const loadMore = () => {
    setPage(page => page + 1);
  };

  return (
    <>
      <div>
        <ReturnButton locationBack={backLinkLocationRef.current} />
      </div>
      {status === 'idle' && <div>Loading...</div>}
      {status === 'resolved' && <UserList users={users} onFollow={onFollow} />}
      {status === 'resolved' &&
        (showLoadMore ? (
          <BtnLoadMore onClick={loadMore} />
        ) : (
          <p>These are all user's tweets...</p>
        ))}
    </>
  );
};

export default Tweets;
