import React, { useState, useEffect } from 'react';
import {
  MdModeEdit,
  MdDeleteForever,
  MdDateRange,
  MdLocationOn,
} from 'react-icons/md';
import { format, parseISO } from 'date-fns';
import { toast } from 'react-toastify';

import api from '~/services/api';
import history from '~/services/history';

import { Container } from './styles';

export default function Details({ match }) {
  const { id } = match.params;
  const [meetup, setMeetup] = useState([]);
  const [image, setImage] = useState([]);
  const [organizer, setOrganizer] = useState([]);

  useEffect(() => {
    async function loadMeet() {
      try {
        const response = await api.get(`organizing/${id}`);

        setMeetup({
          ...response.data,
          formattedDate: format(
            parseISO(response.data.date),
            "dd/MM/Y - HH'h'mm"
          ),
        });

        setImage(response.data.banner);
        setOrganizer(response.data.organizer);
      } catch (err) {
        console.tron.error(err.response.data);
        toast.error(err.response.data.error);
      }
    }
    loadMeet();
  }, [id]);

  async function handleDelete(data) {
    try {
      await api.delete(`meetapp/${data}`);
      toast.success('Meetapp apagado com sucesso!');

      history.push('/');
    } catch (err) {
      toast.error('Falha ao apagar meetapp, tente novamente!');
    }
  }

  async function handleEditing(data) {
    history.push(`/edit/${data}`);
  }

  return (
    <Container>
      <header>
        <h1>{meetup.title}</h1>
        <div>
          <button type="button" onClick={() => handleEditing(meetup.id)}>
            <MdModeEdit size={20} color="#fff" />
            Editar
          </button>
          <button
            type="button"
            onClick={() => handleDelete(meetup.id)}
            disabled={meetup.past}
          >
            <MdDeleteForever size={20} color="#fff" />
            Excluir
          </button>
        </div>
      </header>

      <footer>
        <img src={image.url} alt={meetup.title} />
        <strong>{meetup.description}</strong>
        <p>{`Caso queira participar do meetapp como palestrante, envie um email para ${organizer.email}`}</p>
        <div>
          <span>
            <MdDateRange size={16} color="#fff" />
            {meetup.formattedDate}
          </span>
          <span>
            <MdLocationOn size={16} color="#fff" />
            {meetup.location}
          </span>
        </div>
      </footer>
    </Container>
  );
}
