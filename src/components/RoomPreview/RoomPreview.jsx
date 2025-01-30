import PropTypes from 'prop-types';
import { formatClassNames } from '../../lib/formatClassNames';
import styles from './RoomPreview.module.scss';

function RoomPreview({ room }) {
  const classNames = ['room-preview'];

  return (
    <div className={formatClassNames(styles, classNames)}>
      <p>{room.name}</p>
    </div>
  );
}

RoomPreview.propTypes = {
  room: PropTypes.object.isRequired,
};

export default RoomPreview;
