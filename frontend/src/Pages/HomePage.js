import React from 'react'
import Layout from '../Components/Layout/Layout'
import { useAuth } from '../Context/Auth'

const HomePage = () => {
  const [auth, setAuth] = useAuth()
  return (
    <Layout title={"ALL Products - Best offers "}>
    <h1>HomePage</h1>
    <pre>{JSON.stringify(auth, null,4)}</pre>
    </Layout>
  )
}

export default HomePage