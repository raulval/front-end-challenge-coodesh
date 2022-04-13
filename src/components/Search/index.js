import { FaSearch } from "react-icons/fa";

const Search = () => {
  return (
    <p className="control has-icons-left">
      <input className="input" type="text" placeholder="Searching" />
      <span className="icon is-left">
        <FaSearch />
      </span>
    </p>
  );
};

export default Search;
