import css from "./FriendListItem.module.css";
function FriendsListItem(props) {
  return (
    <div className={css.container}>
      <img src={props.avatar} alt={props.name} />
      <p>{props.name}</p>
      <p className={props.isOnline ? css.online : css.offline}>
        {props.isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
}
export default FriendsListItem;
