import '../styles/globals.css'
import Layout from '../components/Layout'

function MyApp({ Component, pageProps }) {
  return (
  <Layout>
    <Component {...pageProps} />
  </Layout>
  )
}

export default MyApp
//make a git repo
//git init
//git add .
//git commit -m "first commit"
//git branch -M main
//git remote add origin
//git push -u origin main
//git remote add origin
//git push -u origin main
//git remote add origin