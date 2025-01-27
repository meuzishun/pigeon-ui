import useProfile from '../../hooks/useProfile';
import Button from '../../components/Button/Button';
import styles from './ProfileEditButtons.module.scss';

function ProfileEditButtons() {
  const { saveProfile, revertProfile } = useProfile();

  return (
    <div className={styles['btn-container']}>
      <Button
        type='button'
        textContent='save'
        clickHandler={saveProfile}
        classNames={['btn', 'btn-submit']}
      />
      <Button
        type='button'
        textContent='undo'
        clickHandler={revertProfile}
        classNames={['btn']}
      />
    </div>
  );
}

export default ProfileEditButtons;
