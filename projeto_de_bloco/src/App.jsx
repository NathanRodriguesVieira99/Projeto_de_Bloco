import React from 'react'



import Header from './components/Header/Header'
import PopularMovies from './components/PopularMovies/PopularMovies'
import Series from './components/Series/Series'
import TopRated from './components/TopRated/TopRated'



import './styles/global/global.scss'
import Footer from './components/Footer/Footer'
import NowPlaying from './components/NowPlaying/NowPlaying'
import Upcoming from './components/Upcoming/Upcoming'
import TvOnAir from './components/TvOnAir/TvOnAir'


function App() {

  return (
    <>
    
      <Header />
      <PopularMovies />
      <Series />
      <TopRated />
      <TvOnAir />
      <Upcoming />
      <NowPlaying />
      <Footer />
    </>
  )
}

export default App
