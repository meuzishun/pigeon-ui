import PropTypes from 'prop-types';
import useAuth from '../../hooks/useAuth';
import { convertHtmlEntitiesToText } from '../../lib/convertHtmlEntitiesToText';
import { formatClassNames } from '../../lib/formatClassNames';
import styles from './Message.module.scss';

function Message({ message }) {
  const { user } = useAuth();

  const messageClassNames = ['message'];

  const userIsAuthor = message.author._id === user._id;

  if (userIsAuthor) {
    messageClassNames.push('user');
  }

  return (
    <div className={formatClassNames(styles, messageClassNames)}>
      {message.participants.length < 3 ? null : userIsAuthor ? null : (
        <p className={styles['author']}>{message.author.firstName}</p>
      )}
      <p className={styles['content']}>
        {convertHtmlEntitiesToText(message.content)}
      </p>
    </div>
  );
}

Message.propTypes = {
  message: PropTypes.object,
};

export default Message;
