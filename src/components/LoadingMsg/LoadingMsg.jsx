import PropTypes from 'prop-types';
import { BsArrowClockwise } from 'react-icons/bs';
import styles from './LoadingMsg.module.scss';

function LoadingMsg({ text = 'loading', showIcon = true }) {
  return (
    <div className={styles['loading-container']}>
      {showIcon && (
        <div className={styles['loading-icon']}>
          <BsArrowClockwise />
        </div>
      )}
      <p className={styles['loading-msg']}>{text}</p>
    </div>
  );
}

LoadingMsg.propTypes = {
  text: PropTypes.string,
  showIcon: PropTypes.bool,
};

export default LoadingMsg;
