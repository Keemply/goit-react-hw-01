import FriendsListItem from "../FriendListItem/FriendListItem";
function FriendsList(props) {
  return (
    <ul>
      {props.friends.map((friend) => (
        <li key={friend.id}>
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
