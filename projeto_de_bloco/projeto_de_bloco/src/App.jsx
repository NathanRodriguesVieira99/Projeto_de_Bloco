import React from 'react'


import Header from './components/Header/Header'
import PopularMovies from './components/PopularMovies/PopularMovies'
import ImagemGrande from './components/ImagemGrande/ImagemGrande'


import './styles/global/global.scss'
import Footer from './components/Footer/Footer'


function App() {

  return (
    <>

      <Header />
      <ImagemGrande />
      <PopularMovies />
      <Footer />
    </>
  )
}

export default App