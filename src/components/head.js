import Head from 'next/head'

const HeadComponent = (props) => {
  const { title } = props

  return (
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
  )
}

export default HeadComponent
