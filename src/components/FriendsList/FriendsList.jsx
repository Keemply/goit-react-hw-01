import FriendsListItem from "../FriendListItem/FriendListItem";
import css from "./FriendsList.module.css";
function FriendsList(props) {
  return (
    <ul className={css.container}>
      {props.friends.map((friend) => (
        <li key={friend.id} className={css.li}>
          <FriendsListItem
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        </li>
      ))}
    </ul>
  );
}
export default FriendsList;
