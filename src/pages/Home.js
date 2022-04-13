import Navbar from "../components/Navbar";
import Search from "../components/Search";
import Table from "../components/Table";

const Home = () => {
  return (
    <div>
      <Navbar />
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
      <div className="search container is-max-desktop mt-6">
        <Search />
      </div>
      <div className="table container is-max-desktop is-flex is-justify-content-center is-align-items-center mt-6">
        <Table />
      </div>
    </div>
  );
};

export default Home;
