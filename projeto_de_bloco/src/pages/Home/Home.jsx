import Header from '../../components/Header/Header';
import ImagemGrande from '../../components/ImagemGrande/ImagemGrande';
import PopularMovies from '../../components/PopularMovies/PopularMovies';
import Footer from '../../components/Footer/Footer';
import Series from '../../components/Series/Series';
import TopRated from '../../components/TopRated/TopRated';
import NowPlaying from '../../components/NowPlaying/NowPlaying';
import Upcoming from '../../components/Upcoming/Upcoming';
import TvOnAir from '../../components/TvOnAir/TvOnAir';

function Home() {
  return (
    <>
      <Header />
      <ImagemGrande />
      <PopularMovies />
      <Series />
      <TopRated />
      <TvOnAir />
      <Upcoming />
      <NowPlaying />
      <Footer />
    </>
  );
}

export default Home;
