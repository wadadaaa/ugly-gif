import "./index.css";

const UglyInput = ({ placeholder }) => {
  return (
    <input
      className="ugly-input"
      type="text"
      placeholder={placeholder || "Type something here..."}
    />
  );
};

export default UglyInput;
