import { keyframes, css } from 'styled-components'
import { isNull, isEmpty } from 'lodash'

const getStyles = (props) => {
  let styles = ''

  Object.keys(props).forEach((key) => {
    styles += `${key}: ${props[key]};`
  })

  return css`
    ${styles}
  `
}

export const fadeIn = keyframes`
  0% {opacity:0;}
  100% {opacity:1;}
`

export const move = (props) => keyframes`
  from {
      ${!isEmpty(props.animation) && getStyles(props.animation)}
  }
  to {
    height: ${`${props.height}`};
    width: ${props.width ? `${props.width}` : `${props.height}`};

    ${!isNull(props.top) && `top: ${props.top}`};
    ${!isNull(props.right) && `right: ${props.right}`};
    ${!isNull(props.left) && `left: ${props.left}`};
    ${!isNull(props.bottom) && `bottom: ${props.bottom}`};
  }
`
