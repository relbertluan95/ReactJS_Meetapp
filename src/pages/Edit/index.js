import React, { useEffect, useMemo, useState } from 'react';
import { Form, Input } from '@rocketseat/unform';
import { toast } from 'react-toastify';
import { format, parseISO } from 'date-fns';

import { Container } from './styles';

import api from '~/services/api';
import history from '~/services/history';

import BannerInput from './BannerInput';
import DatePicker from './DatePicker';

export default function Edit({ match }) {
  const { id } = match.params;
  const [meetup, setMeetup] = useState(null);

  useEffect(() => {
    async function loadMeetup() {
      try {
        const { data } = await api.get(`organizing/${id}`);

        setMeetup(data);
        // console.tron.log(data);
      } catch (err) {
        console.tron.error(err.response);
      }
    }

    loadMeetup();
  }, [id]);

  async function handleSubmit(data) {
    try {
      console.tron.log(data);

      const response = await api.put(`meetapp/${id}`, data);

      const { id: _id } = response.data;

      toast.success(`Meetapp #${_id}, atualizado com sucesso!`);

      history.push(`/details/${_id}`);
    } catch (err) {
      toast.error('Falha ao editar meetapp, tente novamente!');
      console.tron.log(err.response);
    }
  }

  return (
    <Container>
      <Form initialData={meetup} onSubmit={handleSubmit}>
        <BannerInput name="file_id" />
        <Input name="title" placeholder="Título do Meetapp" />
        <Input type="text" name="description" placeholder="Descrição" />
        <Input name="location" placeholder="Localização" />
        <DatePicker name="date" placeholder="Selecione a data/hora" />
        <button type="submit">Atualizar Meetapp!</button>
      </Form>
    </Container>
  );
}
