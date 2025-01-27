import useLoadingModal from '../../hooks/useLoadingModal';
import { BsArrowClockwise } from 'react-icons/bs';
import styles from './LoadingModal.module.scss';

function LoadingModal() {
  const { showLoadingModal } = useLoadingModal();

  if (!showLoadingModal) {
    return null;
  }

  return (
    <div className={styles['loading-modal']}>
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
