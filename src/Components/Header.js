import "../styles/header.css";
import Search from "./Search";

function Header(props) {
  return (
    <header>
      <h1 className="whitefont">blog</h1>
      <Search></Search>
    </header>
  );
}

export default Header;
