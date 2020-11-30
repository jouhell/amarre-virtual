import React from 'react'
import styled from 'styled-components'
import Buttons from 'components/buttons'

const Text = styled.h1`
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  text-align: center;

  > label {
    font-weight: 700;
    text-transform: capitalize;
  }

  @media (max-width: 425px) {
    font-size: 18px;
  }
`

const Container = styled.div`
  align-items: center;
  background-color: #f2db66;
  border-radius: 8px;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  color: white;
  display: flex;
  flex-direction: column;
  height: 384px;
  justify-content: space-between;
  line-height: 33px;
  user-select: none;
  width: 400px;

  ${Text} {
    margin: 0 48px;
    margin-top: 56px;
  }

  > :last-child {
    margin-bottom: 16px;
  }

  @media (max-width: 425px) {
    width: 320px;
  }
`

const Form = (props) => {
  const { name } = props

  return (
    <Container>
      <Text>
        Hola <label>{name}</label>, Eres una persona muy importante para mí y
        quiero que me des una oportunidad para demostrártelo, ¿te gustaría salir
        conmigo?
      </Text>
      <Buttons />
    </Container>
  )
}

export default Form
