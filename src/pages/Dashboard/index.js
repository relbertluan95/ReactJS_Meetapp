import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import pt from 'date-fns/locale/pt';
import {
  MdAddCircleOutline,
  MdChevronRight,
  MdChevronLeft,
} from 'react-icons/md';

import api from '~/services/api';

import { Container, Header, Meetapp, Controls } from './styles';

export default function Dashboard() {
  const [meetapp, setMeetaap] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function loadMeet() {
      try {
        const response = await api.get(`/organizing`, {
          params: { page },
        });
        // "d 'de' MMMM 'de' YYYY', às' HH:mm'h'"
        const data = response.data.map(meet => {
          return {
            id: meet.id,
            title: meet.title,
            date: format(
              new Date(meet.date),
              "d 'de' MMMM 'de' Y', às' HH:mm'h'",
              {
                locale: pt,
              }
            ),
          };
        });
        setMeetaap(data);
        console.tron.log(data);
      } catch (err) {
        console.tron.error(err);
      }
    }
    loadMeet();
  }, [page]);

  function HandlePrevPage() {
    if (page <= 1) return;
    setPage(page - 1);
  }

  function HandleNextPage() {
    const usersLength = meetapp.length;

    if (usersLength < 10) return;

    setPage(page + 1);
  }

  return (
    <Container>
      <Header>
        <h1>Meus Meetapp</h1>
        <Controls>
          <button type="button" onClick={HandlePrevPage}>
            <MdChevronLeft size={25} color="#fff" />
          </button>
          <span>Página {page}</span>
          <button type="button" onClick={HandleNextPage}>
            <MdChevronRight size={25} color="#fff" />
          </button>
        </Controls>
        <Link to="/new">
          <MdAddCircleOutline size={20} color="#fff" />
          Novo Meetapp
        </Link>
      </Header>

      <ul>
        {meetapp.map(meet => (
          <Meetapp key={meet.id} past={meet.past}>
            <Link to={`/details/${meet.id}`}>
              <strong>{meet.title}</strong>

              <span>
                {meet.date}
                <MdChevronRight size={20} color="#fff" />
              </span>
            </Link>
          </Meetapp>
        ))}
      </ul>
    </Container>
  );
}
