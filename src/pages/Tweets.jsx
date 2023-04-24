import { useState, useEffect, useRef } from 'react';
import { fetcUsers } from '../service/Api';
import { UserList } from '../components/userList/UserList';
import { BtnLoadMore } from '../components/btnLoadMore/BtnLoadMore';
import { useLocation } from 'react-router-dom';
import { ReturnButton } from '../components/returnButton/ReturnButton';
import { Filter } from '../components/filter/Filter';

const Tweets = () => {
  const [users, setUsers] = useState([]);
  const [status, setStatus] = useState('idle');
  const [showLoadMore, setShowLoadMore] = useState(false);
  const [page, setPage] = useState(1);
  const [onFollow, setOnFollow] = useState([]);
  const [filter, setFilter] = useState('show all');

  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/');

  useEffect(() => {
    async function getUser() {
      try {
        const getUserInf = await fetcUsers(page);
        setStatus('resolved');
        setShowLoadMore(true);

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
  }, [filter]);

  const loadMore = () => {
    setPage(page => page + 1);
  };

  const handleChange = event => {
    setFilter(event.target.value);
  };
  const visibleUsers = () => {
    if (filter === 'show all') {
      return users;
    }
    if (filter === 'follow') {
      return users.filter(user => {
        return !onFollow.some(onFollow => {
          return user.id === onFollow.id;
        });
      });
    }
    if (filter === 'following') {
      return onFollow;
    }
  };

  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          paddingLeft: 15,
          paddingRight: 15,
        }}
      >
        <ReturnButton locationBack={backLinkLocationRef.current} />
        <Filter filter={filter} handleChange={handleChange} />
      </div>
      {status === 'idle' && <div>Loading...</div>}
      {status === 'resolved' && (
        <UserList users={visibleUsers(filter)} onFollow={onFollow} />
      )}
      {status === 'resolved' &&
        visibleUsers(filter).length > 0 &&
        (showLoadMore ? (
          <BtnLoadMore onClick={loadMore} />
        ) : (
          <p>These are all user's tweets...</p>
        ))}
    </>
  );
};

export default Tweets;
