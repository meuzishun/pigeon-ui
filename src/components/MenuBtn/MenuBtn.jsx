import PropTypes from 'prop-types';
import styles from './MenuBtn.module.scss';

function MenuBtn({ showLinks }) {
  return (
    <div className={styles['menu-btn']}>
      <div className={`${styles.bar} ${showLinks ? styles.bar1Open : ''}`} />
      <div className={`${styles.bar} ${showLinks ? styles.bar2Hide : ''}`} />
      <div className={`${styles.bar} ${showLinks ? styles.bar3Open : ''}`} />
    </div>
  );
}

MenuBtn.propTypes = {
  showLinks: PropTypes.bool.isRequired,
};

export default MenuBtn;
