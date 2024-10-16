<<<<<<< HEAD
import React from 'react'


import Header from './components/Header/Header'
import PopularMovies from './components/PopularMovies/PopularMovies'

=======
import { Outlet } from "react-router-dom"
>>>>>>> 3c734ea6f484a6bcc3772f218bd256a6730b9f90

import './styles/global/global.scss'

function App() {

  return (
<<<<<<< HEAD
    <>

      <Header />
      <PopularMovies />
      <Footer />
    </>
=======
    <Outlet /> // exibe todas as rotas filhas (Home e Login)
>>>>>>> 3c734ea6f484a6bcc3772f218bd256a6730b9f90
  )
}

export default App
