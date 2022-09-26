import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import { Button } from "@chakra-ui/react";
import useItems from "antd/lib/menu/hooks/useItems";

function Navbar() {
  return (
    <nav className={styles.nav}>
      <div className={styles.left}>
        <div className={styles.logo}>
          <Link to="/">eCommerce</Link>
        </div>

        <ul className={styles.menu}>
          <li>
            <Link to="/">Products</Link>
          </li>
        </ul>
      </div>


    <div className={styles.right}>
        <>
            <Link to="/signin">
                <Button colorScheme="pink">Login</Button>
            </Link>
            <Link to="/signup">
                <Button colorScheme="pink">Register</Button>
            </Link>
        </>

    <>
            <Link to="/basket">
                <Button colorScheme="pink" variant="outline">
                 Basket
                </Button>
            </Link>

            <Link to="/admin">
                <Button colorScheme="pink" variant="ghost">
                 Admin
                </Button>
            </Link>

            <Link to="/profile">
                <Button>
                 Profile
                </Button>
            </Link>
    </>

    </div>

    </nav>
  );
}

export default Navbar;
