import { keyframes, css } from 'styled-components'

const fadeInKeyframes = keyframes` // template string
  from {
    filter: blur(5px); // animación con desenfoque
    opacity: 0;
  }

  to {
    filter: blur(0); // quitando el desenfoque
    opacity: 1;
  }
`
export const fadeIn = ({ time = '1s', type = 'ease' } = {}) =>
  css`animation: ${time} ${fadeInKeyframes} ${type};`

const loaderKeyframe = keyframes`
  0% {
    top: 2px;
    height: 38px;
  }
  50%, 100% {
    top: 14px;
    height: 19px;
  }
`
export const loading = ({ time = '1s', type = 'cubic-bezier(0, 0.5, 0.5, 1)', animationIterationCount = 'infinite' } = {}) =>
  css`animation: ${time} ${loaderKeyframe} ${type} ${animationIterationCount};`
