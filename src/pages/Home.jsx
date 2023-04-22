import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { fetcUsers } from '../service/Api';
import UserList from '../components/userList/UserList';

const Home = () => {
  //   const [searchParams, setSearchParams] = useSearchParams();
  //   const query = searchParams.get('query') ?? '';

  const [users, setUsers] = useState([]);
  // const [totalRezultMovie, setTotalRezMovie] = useState(null);
  const [showLoading, setShowLoading] = useState(false);
  //   const [inputSearch, setInputSearch] = useState(query);
  useEffect(() => {
    setShowLoading(true);
    async function getUser() {
      try {
        const getUserInf = await fetcUsers();
        setUsers(getUserInf);
        console.log(getUserInf);
        // setTotalRezMovie(getMovieInf.total_results);
        setShowLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    getUser();
  }, []);
  return <UserList users={users} />;
};

export default Home;
