import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { List, Item, Title } from './UserList.styled';

const UserList = ({ users }) => {
  const location = useLocation();

  return (
    <List>
      {users.map(({ id, user, tweets, followers, avatar }) => (
        <Item key={id}>
          {/* <Link to={`/movies/${id}`} state={{ from: location }}> */}
          <p>{user}</p>
          <p>{tweets}</p>
          <p>{followers}</p>
          <img src={avatar} alt="avatar" width={62} />
          {/* </Link> */}
        </Item>
      ))}
    </List>
  );
};
export default UserList;
