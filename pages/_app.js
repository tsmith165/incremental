import '../styles/globals/globals.scss'
import 'react-tippy/dist/tippy.css';
import Layout from '../src/components/layout/Layout'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
    )
}

export default MyApp
