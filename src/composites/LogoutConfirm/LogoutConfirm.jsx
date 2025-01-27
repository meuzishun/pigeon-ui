import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import Button from '../../components/Button/Button';
import styles from './LogoutConfirm.module.scss';

function LogoutConfirm() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleClick = () => {
    logout();
    navigate('/');
  };
  return (
    <div className={styles['logout-confirm']}>
      <p>Are you sure you want to logout?</p>
      <Button
        type='button'
        textContent='logout'
        clickHandler={handleClick}
        classNames={['btn', 'btn-warning']}
      />
    </div>
  );
}

export default LogoutConfirm;
