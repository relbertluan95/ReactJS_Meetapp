import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  border: 0;
  border-radius: 4px;
  margin-bottom: 10px;

  label {
    display: block;
    text-align: center;
    width: 100%;
    background: rgba(0, 0, 0, 0.1);
    clear: both;
    cursor: pointer;

    &:hover {
      opacity: 0.7;
    }

    img {
      object-fit: cover;
      height: 220px;
      min-height: 250px;
      width: 100%;
      border-radius: 5px;
      border: 1px solid rgba(255, 255, 255, 0.3);
      background: #eee;
    }

    input {
      display: none;
    }
    div {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      text-align: center;
      background: rgba(0, 0, 0, 0.3);
      color: #fff;
      clear: both;
      min-height: 200px;

      span {
        display: block;
      }
    }
  }
`;
