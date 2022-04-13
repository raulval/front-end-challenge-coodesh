import logo from "../../images/logoipsum-logo-35.svg";
import userIcon from "../../images/user.png";

const Navbar = () => {
  return (
    <nav className="navbar is-white is-fluid">
      <div className="navbar-start">
        <a className="navbar-item ml-5" href="/">
          <img src={logo} alt="" width="30" height="24" className="mr-2" />
          <strong>Pharma Inc</strong>
        </a>
      </div>
      <div className="navbar-end">
        <a className="navbar-item mr-5" href="/">
          <img src={userIcon} alt="user" width="30" height="24" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
