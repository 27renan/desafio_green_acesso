import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 48px;
  color: #3a3a3a;
  display: flex;
  justify-content: center;
  margin-top: 20px;

  @media (max-width: 376px) {
    font-size: 30px;
  }
`;

export const NotCharacter = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
  span {
    font-weight: bold;
  }
`;

export const Filtro = styled.section`
  margin-top: 40px;
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const Input = styled.input`
  width: 70%;
  border-radius: 4px;
  border: none;
  border-bottom: 1px solid #00bfff;
  font-size: 1.25rem;
  letter-spacing: 0.1rem;
  padding: 5px;
  background-color: #fffafa;
  margin-right: 1rem;
  &:focus {
    outline: 0;
    box-shadow: 0px 0px 3px 0px #0000ff;
    border-radius: 15px;
    background-color: #fff;
  }
`;

export const Button = styled.button`
  border-radius: 15px;
  width: 6rem;
  background-color: #0000ff;
  color: white;
  border: none;
  font-weight: bold;
  &:disabled {
    background-color: #ccc;
  }

  &:hover {
    background-color: #0000ff;
    color: black;
  }

  @media (max-width: 376px) {
    width: 5rem;
  }
`;

export const List = styled.section`
  margin-top: 40px;
  display: flex;
  justify-content: center;

  @keyframes animacao {
    from {
      opacity: 0;
      transform: translateX(50px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  @media (max-width: 376px) {
    margin-left: 2rem;
  }

  table {
    width: 80%;
    animation-name: animacao;
    animation-duration: 2s;
  }

  tbody > tr {
    cursor: pointer;
  }

  img {
    border-radius: 50%;
    height: 4rem;
  }

  .text {
    vertical-align: middle;
  }
`;

export const Pagination = styled.section`
  display: flex;
  justify-content: flex-end;
  width: 90%;
  margin-top: 15px;
  margin-bottom: 50px;

  button {
    border-radius: 15px;
    width: 6rem;
    background-color: #0000ff;
    color: white;
    border: none;
    font-weight: bold;
  }

  span {
    margin-left: 10px;
    margin-right: 10px;
  }

  .currentPage {
    color: #0000ff;
    border-bottom: 2px solid;
    cursor: pointer;
  }

  .next {
    cursor: pointer;
  }

  .prev {
    cursor: pointer;
  }

  .newPage {
    cursor: pointer;
  }

  .totalPages {
    margin-right: 15px;
  }
`;
