import birdPic from '../../assets/img/pigeon.png';
import styles from './Heading.module.scss';
import { NavLink } from 'react-router-dom';

function Heading() {
  return (
    <div className={styles.heading}>
      <NavLink to=''>
        <img src={birdPic} alt='Picture of pigeon' />
        <h1>Pigeon</h1>
      </NavLink>
    </div>
  );
}

export default Heading;
