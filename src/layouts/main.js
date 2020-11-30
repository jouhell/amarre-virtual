import React from 'react'
import styled from 'styled-components'
import { map, isNull } from 'lodash'
import { move } from 'styles/keyframes'
import useIsTouchDevice from 'hooks/use-is-touch-device'
import Head from 'components/head'

const Container = styled.div`
  align-items: center;
  display: flex;
  height: 100vh;
  justify-content: center;
  overflow: hidden;
  position: relative;

  ${(props) => props.background && `background-color: #${props.background}`};
`

const Circle = styled.div`
  border-radius: 50%;
  height: ${(props) => `${props.height}`};
  position: absolute;
  width: ${(props) => (props.width ? `${props.width}` : `${props.height}`)};
  animation: ${(props) => move(props)} ease-out 2s;

  ${(props) => !isNull(props.opacity) && `opacity: ${props.opacity}`};
  ${(props) =>
    !isNull(props.background) && `background-color: #${props.background}`};
  ${(props) => !isNull(props.right) && `right: ${props.right}`};
  ${(props) => !isNull(props.left) && `left: ${props.left}`};
  ${(props) => !isNull(props.top) && `top: ${props.top}`};
  ${(props) => !isNull(props.bottom) && `bottom: ${props.bottom}`};
`

const Main = (props) => {
  const { children, circles, background, title } = props

  const isTouchDevice = useIsTouchDevice()

  const desktop = [
    {
      background: 'A480F2',
      height: '563px',
      right: '-257px',
      top: '-277px',
      opacity: 0.5,
    },
    {
      background: '5207F2',
      height: '263px',
      left: '-95px',
      top: '-96px',
      opacity: 0.5,
    },
    {
      background: '7B44F2',
      height: '159px',
      right: '-68px',
      bottom: '-69px',
      opacity: 0.5,
    },
    {
      background: '3703A6',
      height: '51px',
      left: '384px',
      top: '-25px',
      opacity: 0.5,
    },
    {
      background: '3703A6',
      height: '51px',
      left: '206px',
      bottom: '-40px',
      opacity: 0.5,
    },
  ]

  const mobile = [
    {
      background: 'A480F2',
      height: '284px',
      right: '-142px',
      top: '-180px',
      opacity: 0.5,
    },
    {
      background: '5207F2',
      height: '83px',
      left: '-31px',
      top: '-21px',
      opacity: 0.5,
    },
    {
      background: '7B44F2',
      height: '66px',
      right: '-25px',
      bottom: '-19px',
      opacity: 0.5,
    },
    {
      background: '3703A6',
      height: '19px',
      left: '130px',
      top: '-9px',
      opacity: 0.5,
    },
    {
      background: '3703A6',
      height: '19px',
      left: '61px',
      bottom: '-9px',
      opacity: 0.5,
    },
  ]

  const defaultCircles = mobile

  return (
    <>
      <Head title={title || 'Amarre Virtual >:D'} />
      <Container background={background ? background : 'CEBDF2'}>
        {map(circles || defaultCircles, (item, index) => (
          <Circle key={index} {...item} />
        ))}
        {children}
      </Container>
    </>
  )
}

export default Main
