import styled from 'styled-components';

export const Container = styled.div`
  height: 64px;
  background: #191620;
  padding: 0 30px;
`;

export const Content = styled.div`
  height: 64px;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;

    a {
      font-weight: bold;
      color: #f94d6a;
      img {
        width: 60px;
      }
    }
  }

  aside {
    display: flex;
    align-items: center;
  }
`;

export const Profile = styled.div`
  display: flex;

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: flex;
      color: #eee;
    }

    a {
      display: block;
      margin-top: 2px;
      font-size: 12px;
      color: #999;
    }
  }

  button {
    height: 32px;
    width: 62px;
    border-radius: 4px;
    background: #f94d6a;
    border: none;
    color: #fff;
    font-weight: bold;
  }
`;
