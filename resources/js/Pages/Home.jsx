import React from 'react'
import Layout from '../Layouts/Layout'
export default function Home() {
  return (
    <div>inertia home</div>
  )
}

Home.layout = page => (
    <Layout>
        {page}
    </Layout>
)

