import axios from 'axios';
import React, { useEffect, useState, useMemo } from 'react';
import ReactPaginate from 'react-paginate';
import Search from '../Search';
import Pokemons from './Pokemons';
import { ReactComponent as Logo } from '../../assets/SVG/PokemonLogo.svg';

const PokimonList = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [pageNumber, setPageNumber] = useState(null);

  const [cardsPerPage, setcardsPerPage] = useState(10);

  const pageVisited = pageNumber * cardsPerPage;

  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults] = useState([]);

  const fetchPokemons = async () => {
    const URL = 'https://pokeapi.co/api/v2/pokemon?limit=100&offset=0';
    setLoading(true);
    const response = await axios.get(URL);
    setLoading(false);

    function PokApi() {
      response.data.results.forEach(async (pokemon) => {
        const res = await fetch(pokemon.url);
        const data = await res.json();
        setData((currentList) => [...currentList, data]);
        setLoading(false);
      });
    }
    PokApi(data.results);
  };

  useEffect(() => {
    fetchPokemons();
  }, [searchResults]);

  const pageCount = Math.ceil(data.length / cardsPerPage);

  const changepage = ({ selected }) => {
    setPageNumber(selected);
  };

  const [sortType, setSortType] = useState('');

  useEffect(() => {
    const sortArray = (type) => {
      const types = {
        weight: 'weight',
        name: 'name',
        height: 'height',
      };
      const sortProperty = types[type];
      const sorted = [...data].sort(
        (a, b) => a[sortProperty] - b[sortProperty]
      );
      setData(sorted);
    };

    sortArray(sortType);
  }, [sortType]);

  return (
    <>
      <div className='logo'>
        <Logo />
      </div>
      <div className='header flex flex-ai-c flex-jc-c'>
        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <div className='selection flex flex-ai-c'>
          <h4>Per Page</h4>
          <select
            value={cardsPerPage}
            onChange={(e) => {
              const selectNumber = e.target.value;
              setcardsPerPage(selectNumber);
            }}>
            <option value='10'>10</option>
            <option value='20'>20</option>
            <option value='50'>50</option>
          </select>
          <h4>Sort</h4>
          <select name='sort' onChange={(e) => setSortType(e.target.value)}>
            <option value='height'>height</option>
            <option value='weight'>weight</option>
            <option value='name'>name</option>
          </select>
        </div>
      </div>
      <div className='pagination'>
        <ReactPaginate
          previousLabel={'<'}
          nextLabel={'>'}
          pageCount={pageCount}
          onPageChange={changepage}
          containerClassName={'paginationBttns'}
          previousClassName={'previousBttn '}
          nextLinkClassName={'nextBttn'}
          disabledClassName={'paginationDisabled'}
          activeClassName={'paginationActive'}
        />
      </div>

      <Pokemons
        data={data}
        loading={loading}
        cardsPerPage={cardsPerPage}
        pageVisited={pageVisited}
        searchTerm={searchTerm}
      />

      <div className='pagination'>
        <ReactPaginate
          previousLabel={'<'}
          nextLabel={'>'}
          pageCount={pageCount}
          onPageChange={changepage}
          containerClassName={'paginationBttns'}
          previousClassName={'previousBttn '}
          nextLinkClassName={'nextBttn'}
          disabledClassName={'paginationDisabled'}
          activeClassName={'paginationActive'}
        />
      </div>
    </>
  );
};

export default PokimonList;
