import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useRef, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { AiFillStar } from 'react-icons/ai';
import { BsStar } from 'react-icons/bs';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';
import api from '../../services/api';
import { Button, Filtro, Input, List, NotCharacter, Pagination, Title } from './style';

export default function CharacterList() {
  const navigate = useNavigate();
  const inputRef = useRef(null);
  const [totalPage, setTotalPage] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [character, setCharacters] = useState([]);
  const [nameCharacter, setNameCharacter] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);
  const [noCharacter, setNoCharacter] = useState(false);

  useEffect(() => {
    load();
    if (inputRef) inputRef.current.focus();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    return nameCharacter !== '' ? setIsDisabled(false) : setIsDisabled(true);
  }, [nameCharacter]);

  const load = async () => {
    try {
      const response = await api.get('/');
      setCharacters(response.data.results);
      setTotalPage(response.data.info.pages);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const newPage = async () => {
      try {
        const response = await api.get(`?page=${currentPage}`);
        setCharacters(response.data.results);
      } catch (error) {
        console.log(error);
      }
    };

    newPage();
  }, [currentPage]);

  const searchCharacter = async (event) => {
    event.preventDefault();
    setNameCharacter(event.target.value);

    try {
      const response = await api.get(`?name=${event.target.value}`);
      setCharacters(response.data.results);
    } catch (error) {
      setCharacters([]);
    }
  };

  const deitailsCharacter = (item) => {
    navigate(`/deitails/${item.id}`);
  };

  const nextPage = () => {
    currentPage === totalPage - 1 ? setCurrentPage(currentPage + 1) : setCurrentPage(currentPage + 2);
  };

  const prevPage = () => {
    currentPage === 2 ? setCurrentPage(currentPage - 1) : setCurrentPage(currentPage - 2);
  };

  const loadOnePage = () => {
    setCurrentPage(currentPage + 1);
  };

  const loadtwoPage = () => {
    setCurrentPage(currentPage + 2);
  };

  const pesquisar = async () => {
    try {
      const response = await api.get(`?name=${nameCharacter}`);
      setCharacters(response.data.results);
    } catch (error) {
      setCharacters([]);
    }
  };

  return (
    <>
      <Title>Lista de Personagens</Title>
      <Filtro>
        <Input
          type='text'
          minLength='3'
          onChange={searchCharacter}
          value={nameCharacter}
          placeholder='Pesquise pelo nome de um personagem'
          ref={inputRef}
        />
        <Button disabled={isDisabled} onClick={pesquisar}>
          Pesquisar
        </Button>
      </Filtro>

      {character.length === 0 && (
        <NotCharacter>
          <span>Personagem não encontrado!</span>
        </NotCharacter>
      )}

      <List>
        <Table hover>
          <thead>
            <tr>
              <th></th>
              <th>Nome</th>
              <th>Status</th>
              <th>Species</th>
              <th>Favorito</th>
            </tr>
          </thead>
          <tbody>
            {character.map((item) => {
              return (
                <tr key={item.id} onClick={() => deitailsCharacter(item)}>
                  <td>
                    <img src={item.image} alt='imagem' />
                  </td>
                  <td className='text'>{item.name}</td>
                  <td className='text'>{item.status}</td>
                  <td className='text'>{item.species}</td>
                  <td className='favorite text'>
                    {item.id !== JSON.parse(sessionStorage.getItem('favorito')) && <BsStar />}
                    {item.id === JSON.parse(sessionStorage.getItem('favorito')) && (
                      <AiFillStar size={25} color={'yellow'} />
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </List>
      <Pagination>
        <div>
          <span className='totalPages'>Total de Páginas: {totalPage}</span>
          {currentPage > 1 && <FiChevronLeft className='prev' size={20} onClick={prevPage} />}
          <span className='currentPage'>{currentPage}</span>
          {currentPage <= totalPage - 1 && (
            <span className='newPage' onClick={loadOnePage}>
              {currentPage + 1}
            </span>
          )}
          {currentPage <= totalPage - 2 && (
            <span className='newPage' onClick={loadtwoPage}>
              {currentPage + 2}
            </span>
          )}
          {currentPage < totalPage && <FiChevronRight className='next' size={20} onClick={nextPage} />}
        </div>
      </Pagination>
    </>
  );
}
