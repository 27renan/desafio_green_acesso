import React, { useEffect, useState } from 'react';
import { AiFillStar } from 'react-icons/ai';
import { BsStar } from 'react-icons/bs';
import { FaRegArrowAltCircleLeft } from 'react-icons/fa';
import { useNavigate, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { formatDate } from '../../helpers/formatDate';
import api from '../../services/api';
import { Card, Title } from './style';

export default function CharacterDeitails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState({});
  const [episode, setEpisode] = useState([]);
  const [location, setLocation] = useState({});
  const [origin, setOrigin] = useState({});
  const [isfavorite, setIsFavorite] = useState(false);
  // const [listFavorites, setListFavorites] = useState([]);

  useEffect(() => {
    if (id === sessionStorage.getItem('favorito')) {
      setIsFavorite(true);
    }
    load();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const load = async () => {
    try {
      const response = await api.get(`${id}`);
      setData(response.data);
      setEpisode(response.data.episode);
      setLocation(response.data.location);
      setOrigin(response.data.origin);
    } catch (error) {
      console.log(error);
    }
  };

  const prevPage = () => {
    navigate('/');
  };

  const favorite = () => {
    let listFavorites = new Array();
    !isfavorite ? setIsFavorite(true) : setIsFavorite(false);
    if (!isfavorite) {
      listFavorites.push(data.id);
      sessionStorage.setItem('favorito', JSON.stringify(data.id, ...listFavorites));
    }
    !isfavorite ? toast.success('Pesronagem favoritado!') : toast.success('Pesronagem desfavoritado!');
  };

  return (
    <>
      <Title>Detalhes do personagem</Title>
      <Card>
        <FaRegArrowAltCircleLeft size={30} onClick={prevPage} cursor={'pointer'} />
        <section className='card'>
          <div className='info_1'>
            <img src={data.image} alt='imagem' />
            <div className='favoritar'>
              {!isfavorite && <button onClick={favorite}>Favoritar</button>}
              {isfavorite && <button onClick={favorite}>Desfavoritar</button>}
              <ToastContainer />
              <div className='star'>
                {!isfavorite && <BsStar size={25} />}
                {isfavorite && <AiFillStar size={25} color={'yellow'} />}
              </div>
            </div>
          </div>

          <div className='info_2'>
            <div>
              <span>
                <strong>Name:</strong>
              </span>
              <span>{data.name}</span>
            </div>

            <div>
              <span>
                <strong>Status:</strong>
              </span>
              <span>{data.status}</span>
            </div>

            <div>
              <span>
                <strong>Genero:</strong>
              </span>
              <span>{data.gender}</span>
            </div>

            <div>
              <span>
                <strong>Species:</strong>
              </span>
              <span>{data.species}</span>
            </div>

            <div>
              <span>
                <strong>Create:</strong>
              </span>
              <span>{formatDate(data.created)}</span>
            </div>

            <div>
              <span>
                <strong>Total of episode:</strong>
              </span>
              <span>{episode.length}</span>
            </div>

            <div>
              <span>
                <strong>Location:</strong>
              </span>
              <span>{location.name}</span>
            </div>

            <div>
              <span>
                <strong>Origin:</strong>
              </span>
              <span>{origin.name}</span>
            </div>
          </div>
        </section>
      </Card>
    </>
  );
}
