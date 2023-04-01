import "./index.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return <footer> © {currentYear}. All rights reserved.</footer>;
};
export default Footer;
