import React from 'react';
import { Form, Input } from '@rocketseat/unform';
import { toast } from 'react-toastify';

import { Container } from './styles';

import api from '~/services/api';
import history from '~/services/history';

import BannerInput from './BannerInput';
import DatePicker from './DatePicker';

export default function New() {
  async function handleSubmit(data) {
    try {
      console.tron.log(data);

      const response = await api.post('meetapp', data);

      const { id } = response.data;

      toast.success(`Meetapp #${id}, criado com sucesso!`);

      history.push(`/details/${id}`);
    } catch (err) {
      toast.error(err.response.data);
      console.tron.log(err);
    }
  }
  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <BannerInput name="file_id" />
        <Input name="title" placeholder="Título do Meetapp" />
        <Input multiline name="description" placeholder="Descrição" />
        <Input name="location" placeholder="Localização" />
        <DatePicker name="date" placeholder="Selecione a data/hora" />
        <button type="submit">Create MeetApp!</button>
      </Form>
    </Container>
  );
}
