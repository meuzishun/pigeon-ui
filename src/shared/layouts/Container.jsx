import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const StyledDiv = styled.div`
  ${(props) => css`
    ${props.$customStyles}
  `}
`;

const Container = ({ children, customStyles = '' }) => {
  return <StyledDiv $customStyles={customStyles}>{children}</StyledDiv>;
};

Container.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
  customStyles: PropTypes.string,
};

export default Container;
