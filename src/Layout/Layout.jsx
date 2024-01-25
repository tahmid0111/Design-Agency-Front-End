import React from 'react'
import Header from '../components/shared/Header'
import Subscribe from '../components/shared/Subscribe'
import Footer from '../components/shared/Footer'
import PageTitle from '../components/shared/PageTitle'

const Layout = (props) => {
  return (
    <>
      <Header />

      {props.children}
      
      <Subscribe />
      <Footer />
    </>
  )
}

export default Layout
