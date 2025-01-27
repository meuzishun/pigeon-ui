import { useLocation, useOutlet } from 'react-router-dom';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import Header from '../containers/Header/Header';
import Footer from '../components/Footer/Footer';
import styles from './RootLayout.module.scss';
import { useRef } from 'react';

export default function RootLayout() {
  const location = useLocation();
  const currentOutlet = useOutlet();
  const nodeRef = useRef(null);

  return (
    <div className={styles['root-layout']}>
      <Header />
      <SwitchTransition>
        <CSSTransition
          key={location.pathname}
          nodeRef={nodeRef}
          timeout={300}
          classNames={{
            appear: styles['fade-appear'],
            appearActive: styles['fade-appear-active'],
            appearDone: styles['fade-appear-done'],
            enter: styles['fade-enter'],
            enterActive: styles['fade-enter-active'],
            enterDone: styles['fade-enter-done'],
            exit: styles['fade-exit'],
            exitActive: styles['fade-exit-active'],
            exitDone: styles['fade-exit-done'],
          }}
          unmountOnExit
        >
          <main ref={nodeRef} className={styles['main']}>
            {currentOutlet}
          </main>
        </CSSTransition>
      </SwitchTransition>
      <Footer />
    </div>
  );
}
