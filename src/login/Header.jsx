import styles from './Header.module.css';
import logo from './assets/mmlogo.png';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className={styles.header}>
            <img src={logo} alt="MassMutual Logo" className={styles.logo} />  {/* Logo Image */}
            <nav className={styles.nav}>
                <ul className={styles.navLinks}>
                <li><a href="#Hero">Home</a></li>
                    <li><a href="#WhyChoose">About Us</a></li>
                    <li><a href="#Plans">Plans</a></li>
                    <li><a href="#Contact">Contact</a></li>
                    <li><Link to="/Login">Login</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;