import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 4px;
  color: #EBD8FF;
  //color: ${p => p.theme.colors.mainTextColor};
  text-decoration: none;
  font-weight: ${p => p.theme.fontWeights.semiBold};
  font-size: ${p => p.theme.fontSizes.l};
  transition: color 250ms linear;

  :hover {
    color: ${p => p.theme.colors.hoverBtnColor};
  }
  @media screen and (min-width: 768px) {
    font-size: ${p => p.theme.fontSizes.xl};
  }
`;