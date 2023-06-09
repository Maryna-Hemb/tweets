import { List, Item } from './UserList.styled';
import { ListItem } from '../listItem/ListItem';

export const UserList = ({ users, onFollow }) => {
  return (
    <List>
      {users.map(user => (
        <Item key={user.id}>
          <ListItem item={user} onFollow={onFollow} />
        </Item>
      ))}
    </List>
  );
};
