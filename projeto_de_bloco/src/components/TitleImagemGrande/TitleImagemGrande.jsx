import './_TitleImagemGrande.scss'


function TitleImagemGrande({ currentMovie }) {
 

  return (
    <div className='TitleImageContainer'>
      {currentMovie ? (
        <div className="conteudosTelaGrande">
          <div className="paiDosTitlosDosFilmes">
            <h1 className='titulo'>{currentMovie.title}</h1>
            <p className='desc'>{currentMovie.overview}</p>
          </div>
        </div>
      ) : (
        <h1></h1>
      )}
    </div>
  );
}

export default TitleImagemGrande