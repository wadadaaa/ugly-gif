import { useState } from "react";
import "./index.css";

const UglyInput = ({ placeholder, onSubmit }) => {
  const [searchValue, setSearchValue] = useState("");
  const handleSearch = (event) => {
    event.preventDefault();
    onSubmit(searchValue);
  };
  return (
    <form onSubmit={handleSearch} className="input-form">
      <input
        className="ugly-input"
        type="text"
        placeholder={placeholder || "Type something here..."}
        value={searchValue}
        onChange={(event) => setSearchValue(event.target.value)}
      />
      <button className="ugly-button">Search</button>
    </form>
  );
};

export default UglyInput;
