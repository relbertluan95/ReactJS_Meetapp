import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 900px;
  margin: 30px auto;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: rgba(255, 255, 255, 0.8);
    margin-bottom: 30px;
    h1 {
      font-weight: 100;
      text-transform: capitalize;
    }
    div {
      display: flex;
    }
    div > button:first-child {
      background: #4dbaf7;
    }
    div > button:first-child:hover {
      background: ${darken(0.08, '#4dbaf7')};
    }
    button {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 5px 0 0 10px;
      background: #f64c75;
      border: 0;
      border-top: 1px solid rgba(0, 0, 0, 0.1);
      font-weight: bold;
      color: #fff;
      border-radius: 4px;
      font-size: 14px;
      transition: background 0.2s;
      padding: 10px 15px;
      &:hover {
        background: ${darken(0.06, '#f64c75')};
      }
      svg {
        margin-right: 8px;
      }
    }
  }

  footer {
    display: flex;
    flex-direction: column;

    img {
      border-radius: 4px;
      height: 250px;
    }

    strong {
      margin: 15px 0;
      font-size: 18;
      color: #fff;
      text-align: center;
    }

    p {
      margin: 0 0 15px;
      font-size: 18;
      color: #fff;
      text-align: center;
    }

    div {
      display: flex;
      align-items: center;
      direction: row;

      span {
        margin-right: 20px;
        display: flex;
        align-items: center;
        color: #fff;
        font-size: 16;
        svg {
          margin-right: 5px;
        }
      }
    }
  }
`;
