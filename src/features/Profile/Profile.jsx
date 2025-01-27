import useProfile from '../../hooks/useProfile';
import ProfileField from '../../components/ProfileField/ProfileField';
import ProfileEditButtons from '../../composites/ProfileEditButtons/ProfileEditButtons';
import styles from './Profile.module.scss';

function Profile() {
  const { profile, isEdited } = useProfile();

  const excludedProps = ['_id', '__v', 'friends'];

  if (!profile) {
    return null;
  }

  return (
    <div className={styles['profile']}>
      <h2>Profile</h2>
      {Object.entries(profile).reduce((results, [label, content], i) => {
        if (!excludedProps.includes(label)) {
          results.push(
            <ProfileField key={i} label={label} content={content} />
          );
        }
        return results;
      }, [])}
      {isEdited && <ProfileEditButtons />}
    </div>
  );
}

export default Profile;
