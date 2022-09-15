import { useState } from 'react'
import AdminLogin from '../components/AdminLogin'
import AppBar from '../components/AppBar'
import Footer from '../components/Footer'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const [open, setOpen] = useState(false)
  return <>
    <AdminLogin open={open} setOpen={setOpen} />
    <AppBar />
    <Component {...pageProps} />
    <Footer setOpen={() => setOpen(true)} />
  </>
}

export default MyApp
