import styles from './Footer.module.scss';

function Footer() {
  return (
    <footer className={styles.footer}>
      &copy; {new Date().getFullYear()} meuzishun
    </footer>
  );
}

export default Footer;
