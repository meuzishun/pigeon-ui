import PropTypes from 'prop-types';
import { useState, useRef } from 'react';
import useOnClickOutside from '../../hooks/useOnClickOutside';
import styles from './Nav.module.scss';
import MenuBtn from '../../components/MenuBtn/MenuBtn';
import NavLinks from '../../composites/NavLinks/NavLinks';

function Nav({ navLinks }) {
  const [showLinks, setShowLinks] = useState(false);
  const nav = useRef();

  const handleNavClick = () => {
    setShowLinks(!showLinks);
  };

  const closeLinks = () => {
    setShowLinks(false);
  };

  useOnClickOutside(nav, closeLinks);

  return (
    <nav className={styles.nav} onClick={handleNavClick} ref={nav}>
      <MenuBtn showLinks={showLinks} />
      <NavLinks
        showLinks={showLinks}
        navLinks={navLinks}
        setShowLinks={setShowLinks}
      />
    </nav>
  );
}

Nav.propTypes = {
  navLinks: PropTypes.array.isRequired,
};

export default Nav;
