import { BsArrowClockwise } from 'react-icons/bs';
import styles from './LoadingPage.module.scss';

function LoadingModal() {
  return (
    <div className={styles['loading-page']}>
      <div className={styles['loading-container']}>
        <div className={styles['loading-icon']}>
          <BsArrowClockwise />
        </div>
        <p className={styles['loading-msg']}>Loading...</p>
      </div>
    </div>
  );
}

export default LoadingModal;
