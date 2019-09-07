import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { MdAddCircleOutline, MdChevronRight } from 'react-icons/md';

import api from '~/services/api';

import { Container, Header, Meetapp } from './styles';

export default function Dashboard() {
  const [meetapp, setMeetaap] = useState([]);

  useEffect(() => {
    async function loadMeet() {
      try {
        const response = await api.get(`/organizing`);
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
  }, []);

  return (
    <Container>
      <Header>
        <h1>Meus Meetapp</h1>
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
