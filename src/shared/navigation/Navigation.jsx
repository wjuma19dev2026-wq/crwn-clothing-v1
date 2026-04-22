import { Outlet } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import styles from "./Navigation.module.css";

const Navigation = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Navigation;
