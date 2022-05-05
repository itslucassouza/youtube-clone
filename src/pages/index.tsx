import { Button } from '@material-ui/core'
import type { NextPage } from 'next'
import Layout from '../components/Layout'


const Home: NextPage = () => {
  return (
    <Layout title="Home">
      Clone youtube 
      <Button variant="outlined" color="secondary">
        primary
      </Button>
    </Layout>
  )
}

export default Home
