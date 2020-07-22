import styled from 'styled-components';

export const Container = styled.section`
    display: flex; 
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    padding-top: 48px;
`;

export const Formulario = styled.form`
  display: flex;
  flex-direction: column;
  height: fit-content;
  min-width: 320px;
  max-width: 420px;
  border: 1px solid #CECECE;
  border-radius: 5px;
  padding: 32px;
  background: white;

  .title{
    color: #151516;
    text-align: center;
    margin-bottom: 24px;
  }

  label{
    font-size: 14px;
    font-weight: 500;
    color: #151516;
  }
  input{
    border: 1px solid #CECECE;
    border-radius: 5px;
    height: 36px;
    margin: 4px 0 16px;
    padding: 5px 12px;
  }
  button{
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    margin: 16px auto;
    padding: 7px 40px;
    background-color: #151516;
    border:none;
    transition: all .5s;
    cursor: pointer;

    font-size: 16px;
    font-weight: 300;
    color: white;
    text-transform: uppercase;
    &:hover{
      background-color: #000;
    }
  }
  a{
    font-size: 14px;
    font-weight: 500;
    color: #151516;
    text-decoration: none;
    text-align: center;

    &:hover{
      font-size: 14.2px;
      color: #000;
    }
  }
`;