import Main from 'layouts/main'
import { useState } from 'react'
import styled from 'styled-components'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { useRouter } from 'next/router'
import { isEmpty } from 'lodash'

const Button = styled.div`
  background-color: #5207f2;
  opacity: 0.5;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 1s;

  & :hover {
    cursor: pointer;
    opacity: 1;
  }
`

const Input = styled.input`
  background-color: white;
  border-radius: 8px;
  border: none;
  height: 40px;
  padding: 0 8px;
  margin-right: 16px;

  & :focus {
    border: 2px solid #5207f2;
    outline: none !important;
  }

  ::placeholder {
    color: #5207f2;
    opacity: 0.5;
    font-weight: 500;
  }
`

const Home = () => {
  const [name, setName] = useState('')

  const router = useRouter()

  const handleInputChange = (event) => {
    setName(event.target.value)
  }

  const handleEnter = () => {
    if (isEmpty(name)) return

    router.push(`/${name}`)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleEnter()
    }
  }

  return (
    <Main>
      <Input
        value={name}
        type="text"
        placeholder="Nombre de la víctima"
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
      />
      <Button onClick={handleEnter}>
        <AiOutlineArrowRight fontSize={25} color="white" />
      </Button>
    </Main>
  )
}

export default Home
