import birdPic from '../../assets/img/pigeon.png';
import styles from './Hero.module.scss';

function Hero() {
  return (
    <div className={styles.hero}>
      <h1>
        Welcome to <span className={styles.brand}>Pigeon</span>
      </h1>
      <img src={birdPic} alt='Picture of pigeon' />
      <p>A simple messaging app to keep you in the loop</p>
    </div>
  );
}

export default Hero;
