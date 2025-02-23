import StyledTexts from './index.styles'

export default function Text({ children, type = 'Headline1', display, color, ...restProps }) {
  const StyledText = StyledTexts[type]

  if (!children) {
    return null
  }

  return (
    <StyledText display={display} color={color} {...restProps}>
      {children}
    </StyledText>
  )
}
