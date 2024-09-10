import netflix from "../assets/netflix-logo.png";
import avatar from "../assets/avatar.png";
const Header = () => {
  return (
    <div class="header">
      <div class="netflix-logo">
        <img
          src={netflix}
          alt="logo"
        />
      </div>
      <div class="user-avatar">
        <img
          src={avatar}
          alt="avatar"
        />
        <span>Ahad Havery</span>
      </div>
    </div>
  );
};

export default Header;
