import PropTypes from 'prop-types';
import { SwitchTransition, CSSTransition } from 'react-transition-group';

function FadeTransition({
  mode = 'out-in',
  parentKey = true,
  nodeRef,
  styles,
  children,
}) {
  return (
    <SwitchTransition mode={mode}>
      <CSSTransition
        key={parentKey}
        nodeRef={nodeRef}
        addEndListener={(done) => {
          nodeRef.current.addEventListener('transitionend', done, false);
        }}
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
        {children}
      </CSSTransition>
    </SwitchTransition>
  );
}

FadeTransition.propTypes = {
  mode: PropTypes.string,
  parentKey: PropTypes.any,
  nodeRef: PropTypes.any,
  styles: PropTypes.object.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default FadeTransition;
