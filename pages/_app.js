// import '../styles/globals.css'
import '../styles/customTheme.scss'
import '../styles/tailwind.css';
import Layout, { siteTitle } from '../components/layout'
// const Layout = ({ children }) => <div className="layout">{children}</div>

// import 'bootstrap/dist/css/bootstrap.css'


function MyApp({ Component, pageProps }) {
  return (
  
    // <Layout>
  <Component {...pageProps} />
  // </Layout>

  )
}

export default MyApp
