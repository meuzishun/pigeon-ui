import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-content: ${(props) => props.$aligncontent};
  justify-content: ${(props) => props.$justifycontent};
  align-items: ${(props) => props.$alignitems};
  gap: ${(props) => props.$gap};
  padding: ${(props) => props.$padding};
`;

const Column = ({
  children,
  $aligncontent = 'normal',
  $justifycontent = 'normal',
  $alignitems = 'normal',
  $gap = '1rem',
  $padding = '0',
}) => {
  return (
    <Container
      $aligncontent={$aligncontent}
      $justifycontent={$justifycontent}
      $alignitems={$alignitems}
      $gap={$gap}
      $padding={$padding}
    >
      {children}
    </Container>
  );
};

Column.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
  $aligncontent: PropTypes.string,
  $justifycontent: PropTypes.string,
  $alignitems: PropTypes.string,
  $gap: PropTypes.string,
  $padding: PropTypes.string,
};

export default Column;
