import { useRouter } from 'next/router'
import { useState } from 'react'
import AdminLogin from '../components/AdminLogin'
import AppBar from '../components/AppBar'
import Footer from '../components/Footer'
import { Layout } from '../components/Layout'
import '../styles/globals.css'
import { AuthProvider, useAuth } from '../utils/AuthContext'

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const [open, setOpen] = useState(false)

  return <>
    <AuthProvider>
      <Layout>
        <AdminLogin open={open} setOpen={setOpen} />
        {router.pathname.includes("register") || router.pathname.includes("login") ? <Component {...pageProps} /> : (
          <>
            <AppBar />
            <Component {...pageProps} />
            <Footer setOpen={() => setOpen(true)} /></>)}
      </Layout>
    </AuthProvider>
  </>
}

export default MyApp
