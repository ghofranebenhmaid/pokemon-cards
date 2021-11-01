import React, { useEffect, useState } from 'react';

import LoadingScreen from '../components/Loading';
import { Link } from 'react-router-dom';
import { ReactComponent as ArrowRight } from '../assets/SVG/icon-arrow-right.svg';

const PkemoneProfil = ({ match }) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchItem = async () => {
      const qry = match.params.pokemonname;
      setLoading(true);
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${qry}`);
      const data = await response.json();

      setData((currentList) => [...currentList, data]);
      setLoading(false);
      console.log(data);
    };
    fetchItem();
  }, []);

  return (
    <div className='profil'>
      {loading ? (
        <LoadingScreen />
      ) : (
        data &&
        data.map((item, index) => (
          <section key={index}>
            <div className='profil__wrap'>
              <div className='profil__img'>
                <img
                  src={item.sprites.other.dream_world.front_default}
                  alt={item.name}
                />
              </div>
              <div className='profil__info'>
                <h1>{item.name}</h1>
                <div className='profil__info--widthHeight'>
                  <span className='profil__info--height  '>
                    <h3>Height</h3>
                    <p>{`${item.height}` / 10} m</p>
                  </span>
                  <span className='profil__info--width  '>
                    <h3>Weight</h3>
                    <p>{`${item.weight}` / 10} kg</p>
                  </span>
                </div>
                <div className='profil__info--types'>
                  <h3>Types</h3>
                  {item.types.map((el, index) => (
                    <div className='name ' key={index}>
                      <p> {el.type.name} </p>
                    </div>
                  ))}
                </div>
              </div>
              <div className='progress'>
                <h3>Stats</h3>
                {item.stats.map((el, index) => (
                  <div className='progress' key={index}>
                    <span>{el.stat.name}</span>
                    <progress
                      id='determinate'
                      value={el.base_stat}
                      min='0'
                      max='100'>
                      <span>{el.base_stat}</span>
                    </progress>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))
      )}
      <Link to='/'>
        <div className='arrowRight'>
          <ArrowRight />
        </div>
      </Link>
    </div>
  );
};

export default PkemoneProfil;
