import Head from 'next/head'
import Header from '../components/Header'
import Previewer from '../components/Previewer'
import Script from 'next/script'

export default function Home() {

  return (
    <div className='flex'>
      <Head>
        <title>
          Markdown Previewer
        </title>
      </Head>
      <Script src='https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js' onLoad={console.log("loaded")}/>
      <Header/>
      <Previewer/>
    </div>
  )
}
