import styled from 'styled-components';

export const StyledFooter = styled.footer`
  height: 50px;
  padding-top: 15px;
  padding-bottom: 15px;
  margin-top: 40px;
`;

export const FooterText = styled.p`
  text-transform: none;
  color: ${p => p.theme.colors.secondTextColor};
  font-size: ${p => p.theme.fontSizes.s};
  font-weight: ${p => p.theme.fontWeights.semiBold};
  text-align: center;
`;

export const FooterLink = styled.a`
  color: inherit;
  transition: color 250ms linear;

  &:hover,
  &:focus {
    color: ${p => p.theme.colors.mainAccent};
  }
`;