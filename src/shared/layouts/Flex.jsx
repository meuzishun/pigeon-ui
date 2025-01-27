import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: ${(props) => props.$direction};
  flex-wrap: ${(props) => props.$wrap};
  justify-content: ${(props) => props.$justifycontent};
  align-items: ${(props) => props.$alignitems};
  align-content: ${(props) => props.$aligncontent};
  gap: ${(props) => props.$gap};
  ${(props) =>
    css`
      ${props.$customStyles}
    `}
`;

const Flex = ({
  children,
  direction = 'row',
  wrap = 'nowrap',
  justifycontent = 'flex-start',
  alignitems = 'stretch',
  aligncontent = 'stretch',
  gap = '0',
  customStyles = '',
}) => {
  return (
    <Container
      $direction={direction}
      $wrap={wrap}
      $justifycontent={justifycontent}
      $alignitems={alignitems}
      $aligncontent={aligncontent}
      $gap={gap}
      $customStyles={customStyles}
    >
      {children}
    </Container>
  );
};

Flex.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
  direction: PropTypes.string,
  wrap: PropTypes.string,
  justifycontent: PropTypes.string,
  alignitems: PropTypes.string,
  aligncontent: PropTypes.string,
  gap: PropTypes.string,
  customStyles: PropTypes.string,
};

export default Flex;
