import React, { useState, useEffect } from 'react';
import fetchPopularSeries from '../../API/apiSeries';
import { IMAGE_BASE_URL } from '../../API/apiServices';

import './Series styles/Series.scss';

function Series() {
  const [series, setSeries] = useState([]);

  useEffect(() => {
    const fetchAllSeries = async () => {
      try {
        const seriesList = await fetchPopularSeries(); 
        console.log('Séries:', seriesList);
        setSeries(seriesList);
      } catch (error) {
        console.error('Erro ao buscar séries', error);
      }
    };
    fetchAllSeries();
  }, []);

  return (
    <div className='odinSeries'>
      <h2 className='seriesNoMomento'>Séries</h2>
      {series.length > 0 ? (
        <ul className='listaSeries'>
          {series.map((serie) => (
            <li key={serie.id} className='itensSeries'>
              <img
                className='seriesImages'
                src={`${IMAGE_BASE_URL}${serie.poster_path}`}
                alt={serie.name} 
              />
            </li>
          ))}
        </ul>
      ) : (
        <p>Carregando séries...</p>
      )}
    </div>
  );
}

export default Series;
