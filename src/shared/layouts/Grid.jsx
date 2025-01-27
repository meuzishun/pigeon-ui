import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const Container = styled.div`
  display: grid;
  grid-template-columns: ${(props) => props.$templateColumns};
  grid-template-rows: ${(props) => props.$templateRows};
  grid-template-areas: ${(props) => props.$templateAreas};
  gap: ${(props) => props.$gap};
  justify-items: ${(props) => props.$justifyItems};
  align-items: ${(props) => props.$alignItems};
  justify-content: ${(props) => props.$justifyContent};
  align-content: ${(props) => props.$alignContent};
  padding: ${(props) => props.$padding};
  ${(props) =>
    css`
      ${props.$customStyles}
    `}
`;

const Grid = ({
  children,
  templateColumns = 'none',
  templateRows = 'none',
  templateAreas = 'none',
  gap = '0',
  justifyItems = 'stretch',
  alignItems = 'stretch',
  justifyContent = 'stretch',
  alignContent = 'stretch',
  customStyles = '',
}) => {
  return (
    <Container
      $templateColumns={templateColumns}
      $templateRows={templateRows}
      $templateAreas={templateAreas}
      $gap={gap}
      $justifyItems={justifyItems}
      $alignItems={alignItems}
      $justifyContent={justifyContent}
      $alignContent={alignContent}
      $customStyles={customStyles}
    >
      {children}
    </Container>
  );
};

Grid.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
  templateColumns: PropTypes.string,
  templateRows: PropTypes.string,
  templateAreas: PropTypes.string,
  gap: PropTypes.string,
  justifyItems: PropTypes.string,
  alignItems: PropTypes.string,
  justifyContent: PropTypes.string,
  alignContent: PropTypes.string,
  customStyles: PropTypes.string,
};

export default Grid;
