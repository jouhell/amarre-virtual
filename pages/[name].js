import Main from 'layouts/main'
import { useRouter } from 'next/router'
import Form from 'components/form'
import useIsTouchDevice from 'hooks/use-is-touch-device'

const Name = () => {
  const router = useRouter()

  const isTouchDevice = useIsTouchDevice()

  const desktop = [
    {
      background: '84B1D9',
      height: '563px',
      right: '-257px',
      top: '-277px',
    },
    {
      background: '2F4673',
      height: '263px',
      left: '-95px',
      top: '-96px',
    },
    {
      background: '497AA6',
      height: '159px',
      right: '-68px',
      bottom: '-69px',
    },
    {
      background: 'F2F2F2',
      height: '51px',
      left: '384px',
      top: '-25px',
    },
    {
      background: 'F2F2F2',
      height: '51px',
      left: '206px',
      bottom: '-40px',
    },
  ]

  const mobile = [
    {
      background: '84B1D9',
      height: '284px',
      right: '-142px',
      top: '-180px',
    },
    {
      background: '2F4673',
      height: '83px',
      left: '-31px',
      top: '-21px',
    },
    {
      background: '497AA6',
      height: '66px',
      right: '-25px',
      bottom: '-19px',
    },
    {
      background: 'F2F2F2',
      height: '19px',
      left: '130px',
      top: '-9px',
    },
    {
      background: 'F2F2F2',
      height: '19px',
      left: '61px',
      bottom: '-9px',
    },
  ]

  const circles = mobile

  return (
    <Main title={router.query.name} background="ACD7F2" circles={circles}>
      <Form name={router.query.name} />
    </Main>
  )
}

export default Name
