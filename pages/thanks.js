import Main from 'layouts/main'
import Image from 'next/image'
import styled from 'styled-components'
import { fadeIn } from 'styles/keyframes'
import useIsTouchDevice from 'hooks/use-is-touch-device'

const StyledImage = styled(Image)`
  padding: 0 24px;
  animation: ${fadeIn} ease 4s;
`

const Thanks = () => {
  const isTouchDevice = useIsTouchDevice()

  const mobile = [
    {
      background: 'BF6068',
      height: '200px',
      right: '25%',
      top: '25%',
      opacity: 0,
      animation: {
        top: '-180px',
        right: '-142px',
        height: '284px',
        width: '284px',
        opacity: 1,
      },
    },
    {
      background: 'A60A0A',
      height: '83px',
      left: '25%',
      top: '25%',
      opacity: 0,
      animation: {
        left: '-31px',
        top: '-21px',
        opacity: 1,
      },
    },
    {
      background: 'BF2C2C',
      height: '66px',
      right: '35%',
      bottom: '25%',
      opacity: 0,
      animation: {
        right: '-25px',
        bottom: '-19px',
        opacity: 1,
      },
    },
    {
      background: 'F2A7A7',
      height: '19px',
      left: '35%',
      top: '25%',
      opacity: 0,
      animation: {
        left: '130px',
        top: '-9px',
        opacity: 1,
      },
    },
    {
      background: 'F2A7A7',
      height: '19px',
      left: '35%',
      bottom: '25%',
      opacity: 0,
      animation: {
        left: '61px',
        bottom: '-9px',
        opacity: 1,
      },
    },
  ]

  const desktop = [
    {
      background: 'BF6068',
      height: '330px',
      right: '25%',
      top: '25%',
      opacity: 0,
      animation: {
        top: '-277px',
        right: '-257px',
        height: '563px',
        width: '563px',
        opacity: 1,
      },
    },
    {
      background: 'A60A0A',
      height: '263px',
      left: '25%',
      top: '25%',
      opacity: 0,
      animation: {
        left: '-95px',
        top: '-96px',
        opacity: 1,
      },
    },
    {
      background: 'BF2C2C',
      height: '159px',
      right: '35%',
      bottom: '25%',
      opacity: 0,
      animation: {
        right: '-68px',
        bottom: '-69px',
        opacity: 1,
      },
    },
    {
      background: 'F2A7A7',
      height: '51px',
      left: '35%',
      top: '25%',
      opacity: 0,
      animation: {
        left: '384px',
        top: '-25px',
        opacity: 1,
      },
    },
    {
      background: 'F2A7A7',
      height: '51px',
      left: '35%',
      bottom: '25%',
      opacity: 0,
      animation: {
        left: '206px',
        bottom: '-40px',
        opacity: 1,
      },
    },
  ]

  const circles = mobile

  return (
    <Main background="E5E5E5" circles={circles}>
      <StyledImage
        src="/cora.png"
        alt="Cora"
        width={556}
        height={483}
        quality={75}
      />
    </Main>
  )
}

export default Thanks
