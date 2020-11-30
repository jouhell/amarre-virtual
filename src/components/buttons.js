import React, { useState } from 'react'
import styled from 'styled-components'
import { darken } from 'polished'
import { map, reverse } from 'lodash'
import { useRouter } from 'next/router'
import { fadeIn } from 'styles/keyframes'
import useIsTouchDevice from 'hooks/use-is-touch-device'

const Button = styled.div`
  animation: ${fadeIn} ease 1s;
  border-radius: 4px;
  font-size: 22px;
  font-weight: 700;
  height: 40px;
  text-align: center;
  justify-content: center;
  align-items: center;
  transition: background-color 0.7s;
  width: 120px;

  ${(props) => props.background && `background-color: #${props.background}`};

  & :hover {
    cursor: pointer;

    ${(props) =>
      props.background &&
      `background-color: ${darken(0.2, `#${props.background}`)}`};
  }

  @media (max-width: 425px) {
    font-size: 20px;
  }
`

const Container = styled.div`
  display: flex;

  > :first-child {
    margin-right: 40px;
  }
`

const Buttons = () => {
  const router = useRouter()

  const isTouchDevice = useIsTouchDevice()

  const mobile = [
    { background: '79DA5F', text: 'Si', onClick: () => router.push('/thanks') },
    {
      background: 'C56463',
      text: 'No',
      onClick: () => {
        reverse(buttons)

        setButtons([...buttons])
      },
    },
  ]

  const desktop = [
    { background: '79DA5F', text: 'Si', onClick: () => router.push('/thanks') },
    {
      background: 'C56463',
      text: 'No',
      onMouseOver: () => {
        reverse(buttons)

        setButtons([...buttons])
      },
    },
  ]

  const [buttons, setButtons] = useState(mobile)

  return (
    <Container>
      {map(buttons, (item, index) => (
        <Button key={index} {...item}>
          {item.text}
        </Button>
      ))}
    </Container>
  )
}

export default Buttons
