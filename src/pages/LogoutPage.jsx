import LogoutConfirm from '../composites/LogoutConfirm/LogoutConfirm';
import styles from './LogoutPage.module.scss';

function LogoutPage() {
  return (
    <div className={styles['logout-page']}>
      <LogoutConfirm />
    </div>
  );
}

export default LogoutPage;
