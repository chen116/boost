// import '../styles/globals.css'
import '../styles/customTheme.scss'
import Layout, { siteTitle } from '../components/layout'
// const Layout = ({ children }) => <div className="layout">{children}</div>
function MyApp({ Component, pageProps }) {
  return (
  
    <Layout>
  <Component {...pageProps} />
  </Layout>

  )
}

export default MyApp
