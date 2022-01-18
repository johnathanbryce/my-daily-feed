import classes from "./Header.module.css";
import WeatherAPI from "../APIs/WeatherAPI";

const Header = () => {
  return (
    <div className={classes.header}>
      <div className={classes.header_content}>
        <h1> My Daily Feed</h1>
        <WeatherAPI />
      </div>
    </div>
  );
};

export default Header;
