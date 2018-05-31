import { fadeIn } from 'react-animations'
import styled, { keyframes } from 'styled-components'

const fadeInAnimation = keyframes`${fadeIn}`

export const FadeIn = styled.div`
  animation: ${fadeInAnimation} ${props => props.duration}s || 1s;
`
