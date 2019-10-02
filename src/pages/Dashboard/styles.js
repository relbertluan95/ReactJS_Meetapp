import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 900px;
  margin: 0 auto;
`;

export const Header = styled.header`
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    font-weight: bold;
    color: #fff;
  }

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 5px 0 0;
    background: #f94d6a;
    border: 0;
    font-weight: bold;
    color: #fff;
    border-radius: 4px;
    font-size: 14px;
    transition: background 0.2s;
    padding: 10px 15px;
    &:hover {
      background: ${darken(0.06, '#f94d6a')};
    }

    svg {
      margin-right: 8px;
    }
  }
`;

export const Controls = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    border: none;
    background: none;
  }

  span {
    margin: 0 20px;
    font-size: 18px;
    color: #eee;
  }
`;

export const Meetapp = styled.li`
  background: rgba(0, 0, 0, 0.2);
  height: 42px;
  display: flex;
  color: #fff;
  border-radius: 4px;
  padding: 10px 15px;
  margin: 10px 0;
  transition: background 0.2s;

  a {
    width: 100%;
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  strong {
    font-size: 16px;
  }
  span {
    display: flex;
    justify-content: space-between;
    align-items: center;
    svg {
      margin-left: 20px;
    }
  }
  &:hover {
    background: rgba(0, 0, 0, 0.3);
  }
  &:hover time {
    color: #f94d6a;
    opacity: 0.7;
  }
`;
