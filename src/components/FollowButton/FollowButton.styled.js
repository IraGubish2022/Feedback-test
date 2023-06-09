import styled from 'styled-components';

export const StyledBtn = styled.button`
  border: none;
  padding: 14px 28px;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: ${p => p.theme.radii.btnRadius};
  transition: all 250ms linear;
  background-color: ${p => p.backgroundColor};
  text-transform: uppercase;

  color: ${p => p.theme.colors.btnTextColor};
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.semiBold};

  @media screen and (min-width: 1440px) {
    font-size: ${p => p.theme.fontSizes.l};
    height: 50px;
    width: 196px;
  }

  &:hover {
    background-color: ${p =>
      p.backgroundColor === '#EBD8FF' ? '#5CD3A8' : '#EBD8FF'};
  }
`;