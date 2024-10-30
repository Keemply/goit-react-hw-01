import css from "./Profile.module.css";
function Profile(props) {
  return (
    <div className={css.profileContainer}>
      <div className={css.imgContainer}>
        <img
          src={props.img}
          alt={props.name}
          className={css.profileContainerImg}
        />
        <p>{props.name}</p>
        <p>@{props.tag}</p>
        <p>{props.location}</p>
      </div>

      <ul className={css.stats}>
        <li className={css.stat}>
          <span>Followers</span>
          <span>{props.stats.followers}</span>
        </li>
        <li className={css.stat}>
          <span>Views</span>
          <span>{props.stats.views}</span>
        </li>
        <li className={css.stat}>
          <span>Likes</span>
          <span>{props.stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
export default Profile;
