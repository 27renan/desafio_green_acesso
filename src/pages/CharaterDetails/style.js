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

export const Card = styled.section`
  display: flex;
  justify-content: center;
  margin-top: 40px;

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
    flex-direction: column;
  }

  .card {
    background-color: #edd8d8;
    width: auto;
    height: auto;
    box-shadow: 23px 0px 15px 0px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: row;
    padding: 20px;
    margin-left: 20px;
    animation-name: animacao;
    animation-duration: 2s;

    @media (max-width: 376px) {
      flex-direction: column;
      width: 88%;
      margin-top: 20px;
    }

    .info_1 {
      display: flex;
      flex-direction: column;
      align-items: center;

      img {
        border-radius: 50%;
        height: 13rem;
      }

      button {
        margin-top: 30px;
        border-radius: 15px;
        width: 7rem;
        background-color: #0000ff;
        color: white;
        border: none;
        margin-right: 10px;
      }

      .favoritar {
        display: flex;
        align-items: end;

        .star {
          margin-bottom: 2px;
        }
      }
    }

    .info_2 {
      padding-left: 20px;
      padding-right: 20px;

      @media (max-width: 376px) {
        margin-top: 30px;
      }

      div {
        margin-bottom: 0.3rem;

        span {
          margin-left: 0.4rem;
        }
      }
    }
  }
`;
