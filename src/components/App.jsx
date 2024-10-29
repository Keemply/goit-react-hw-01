import "./App.css";
import Profile from "./Profile/Profile";
import FriendsList from "./FriendsList/FriendsList";
import userData from "../userData.json";
import friends from "../friends.json";
function App() {
  return (
    <div>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        img={userData.avatar}
        stats={userData.stats}
      />
      <FriendsList friends={friends} />
    </div>
  );
}

export default App;
