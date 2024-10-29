function FriendsListItem(props) {
  return (
    <div>
      <img src={props.avatar} alt={props.name} />
      <p>{props.name}</p>
      <p>{props.isOnline ? "Online" : "Offline"}</p>
    </div>
  );
}
export default FriendsListItem;
