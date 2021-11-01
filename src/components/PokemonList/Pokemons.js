import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import Card from '../Card';
import LoadingScreen from '../Loading';

const Pokemons = ({ data, loading, pageVisited, cardsPerPage, searchTerm }) => {
  return (
    <div className='pokemon'>
      {loading ? (
        <LoadingScreen />
      ) : (
        data &&
        data
          .slice(pageVisited, pageVisited + cardsPerPage)
          .filter((element) => {
            const ability = element.abilities.map((item) => item.ability.name);
            const name = element.name.toLowerCase();
            console.log(ability, searchTerm);
            console.log(searchTerm);
            if (searchTerm == 'undefined') {
              return element;
            } else if (
              ability.includes(searchTerm.toLowerCase()) ||
              name.includes(searchTerm.toLowerCase())
            ) {
              return element;
            }
          })
          .map((item, index) => (
            <section key={index}>
              <Link
                to={{
                  pathname: `/pokemon/${item.name}`,
                }}>
                <Card
                  image={item.sprites.other.dream_world.front_default}
                  name={item.name}
                  weight={item.weight}
                  height={item.height}
                  abilities={item.abilities.map((el, index) => (
                    <div className='abilty' key={index}>
                      <span>{el.ability.name}</span>
                    </div>
                  ))}
                />
              </Link>
            </section>
          ))
      )}
    </div>
  );
};

export default Pokemons;
