import PropTypes from 'prop-types';
import { useRef } from 'react';
import useProfile from '../../hooks/useProfile';
import useOnClickOutside from '../../hooks/useOnClickOutside';
import { convertCamelcaseToSent } from '../../lib/convertCamelcaseToSent';
import { BsPencilSquare, BsCheckCircle } from 'react-icons/bs';
import styles from './ProfileField.module.scss';

function ProfileField({ label, content }) {
  const { setEditField, editProfile, editField } = useProfile();
  const field = useRef(null);

  const handleOkClick = () => {
    setEditField(null);
  };

  const handleEditClick = () => {
    setEditField(label);
  };

  const handleInputChange = (e) => {
    editProfile(label, e.target.value);
  };

  const handleClickOutside = () => {
    setEditField(null);
  };

  useOnClickOutside(field, handleClickOutside);

  return (
    <div className={styles['profile-field']}>
      <label>{convertCamelcaseToSent(label)}</label>
      {editField === label ? (
        <input
          value={content}
          onChange={handleInputChange}
          autoFocus
          ref={field}
        />
      ) : (
        <p>{content}</p>
      )}
      {editField === label ? (
        <button className={styles['ok-btn']} onClick={handleOkClick}>
          <BsCheckCircle />
        </button>
      ) : (
        <button className={styles['edit-btn']} onClick={handleEditClick}>
          <BsPencilSquare />
        </button>
      )}
    </div>
  );
}

ProfileField.propTypes = {
  label: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default ProfileField;
