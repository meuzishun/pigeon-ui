import { NavLink } from 'react-router-dom';
import styles from './WelcomeNav.module.scss';

function WelcomeNav() {
  return (
    <nav className={styles.nav}>
      <NavLink to='login'>Login</NavLink>
      <NavLink to='register'>Signup</NavLink>
    </nav>
  );
}

export default WelcomeNav;
