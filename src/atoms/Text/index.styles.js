import styled from 'styled-components'

const Headline1 = styled.h1`
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 2.125rem;
  line-height: 2.25rem;
  display: ${(p) => p.display || 'inline-block'};
  color: ${(p) => (p.color ? p.theme.colors[p.color] : p.theme.colors.headLineColor)};
`

const Headline2 = styled.h2`
  font-family: 'DM Sans';
  font-style: normal;
  font-weight: 400;
  font-size: 1.5rem;
  line-height: 1.5rem;
  letter-spacing: 0.0112rem;
  display: ${(p) => p.display || 'inline-block'};
  color: ${(p) => (p.color ? p.theme.colors[p.color] : p.theme.colors.headLineColor)};
`

const Headline3 = styled.h3`
  font-family: DM Sans;
  font-style: normal;
  font-weight: 31.25rem;
  font-size: 1.25rem;
  line-height: 1.5rem;
  letter-spacing: 0.0094rem;
  display: ${(p) => p.display || 'inline-block'};
  color: ${(p) => (p.color ? p.theme.colors[p.color] : p.theme.colors.headLineColor)};
`

const Headline4 = styled.h4`
  font-family: DM Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 2rem;
  line-height: 2.5rem;
  display: ${(p) => p.display || "inline-block"};
  color: ${(p) => (p.color ? p.theme.colors[p.color] : "rgba(0, 11, 42, 0.88)")};
`;

const Subtitle1 = styled.span`
  font-family: DM Sans;
  font-style: normal;
  font-weight: 25rem;
  font-size: 1rem;
  line-height: 1.5rem;
  letter-spacing: 0.0094rem;
  display: ${(p) => p.display || 'inline-block'};
  color: ${(p) => (p.color ? p.theme.colors[p.color] : p.theme.colors.headLineColor)};
`

const Subtitle2 = styled.span`
  font-family: DM Sans;
  font-style: normal;
  font-weight: 31.25rem;
  font-size: 0.875rem;
  line-height: 1.5rem;
  letter-spacing: 0.0063rem;
  display: ${(p) => p.display || 'inline-block'};
  color: ${(p) => (p.color ? p.theme.colors[p.color] : p.theme.colors.headLineColor)};
`

const Body1 = styled.span`
  font-family: DM Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 1rem;
  line-height: 1.5rem;
  letter-spacing: 0.0313rem;
  display: ${(p) => p.display || 'inline-block'};
  color: ${(p) => (p.color ? p.theme.colors[p.color] : p.theme.colors.headLineColor)};
`

const Body2 = styled.span`
  font-family: DM Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 1rem;
  line-height: 1.5rem;
  letter-spacing: 0.0313rem;
  display: ${(p) => p.display || 'inline-block'};
  color: ${(p) => (p.color ? p.theme.colors[p.color] : p.theme.colors.headLineColor)};
`

const Button = styled.span`
  font-family: DM Sans;
  font-style: normal;
  font-weight: 31.25rem;
  font-size: 0.875rem;
  line-height: 1rem;
  letter-spacing: 0.078125rem;
  text-transform: uppercase;
  display: ${(p) => p.display || 'inline-block'};
  color: ${(p) => (p.color ? p.theme.colors[p.color] : p.theme.colors.headLineColor)};
`

const Caption = styled.span`
  font-family: DM Sans;
  font-style: normal;
  font-weight: 25rem;
  font-size: 0.75rem;
  line-height: 1rem;
  letter-spacing: 0.025rem;
  display: ${(p) => p.display || 'inline-block'};
  color: ${(p) => (p.color ? p.theme.colors[p.color] : p.theme.colors.headLineColor)};
`

const Overline = styled.span`
  font-family: DM Sans;
  font-style: normal;
  font-weight: 25rem;
  font-size: 0.875rem;
  line-height: 1rem;
  letter-spacing: 0.0938rem;
  text-transform: uppercase;
  display: ${(p) => p.display || 'inline-block'};
  color: ${(p) => (p.color ? p.theme.colors[p.color] : p.theme.colors.headLineColor)};
`

const Text = {
  Headline1,
  Headline2,
  Headline3,
  Headline4,
  Subtitle1,
  Subtitle2,
  Body1,
  Body2,
  Button,
  Caption,
  Overline,
}

export default Text
