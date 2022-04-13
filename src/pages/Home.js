import { FaSearch } from "react-icons/fa";
import userIcon from "../images/user.png";

const Home = () => {
  return (
    <div>
      <nav className="navbar is-white is-fluid">
        <div className="navbar-start">
          <a className="navbar-item ml-5" href="/">
            <img
              src="/docs/5.0/assets/brand/bootstrap-logo.svg"
              alt=""
              width="30"
              height="24"
              className="mr-2"
            />
            <strong>Pharma Inc</strong>
          </a>
        </div>
        <div className="navbar-end">
          <a className="navbar-item mr-5" href="/">
            <img src={userIcon} alt="user" width="30" height="24" />
          </a>
        </div>
      </nav>
      <div className="container is-max-desktop mt-6">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </p>
      </div>
      <div className="container is-max-desktop mt-6">
        <p className="control has-icons-left">
          <input className="input" type="text" placeholder="Searching" />
          <span className="icon is-left">
            <FaSearch />
          </span>
        </p>
      </div>
      <div className="container is-max-desktop is-flex is-justify-content-center is-align-items-center mt-6">
        <table class="table is-bordered is-narrow is-hoverable is-fullwidth has-text-centered">
          <thead>
            <tr>
              <th className="has-background-grey-lighter">Name</th>
              <th className="has-background-grey-lighter">Gender</th>
              <th className="has-background-grey-lighter">Birth</th>
              <th className="has-background-grey-lighter">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Raul</td>
              <td>Male</td>
              <td>02/08/1995</td>
              <td>IDK</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
