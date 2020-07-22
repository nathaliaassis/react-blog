import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;

  .title{
    color: #151516;
    text-align: center;
    margin: 24px 0;
  }
  h6{
    font-weight: 400;
    margin-bottom: 16px;
  }
`;

export const Formulario = styled.form`
  display: flex;
  flex-direction: column;
  height: fit-content;
  width: 90%;
  max-width: 600px;
  border: 1px solid #CECECE;
  border-radius: 5px;
  padding: 16px;
  
  background: white;


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
  textarea{
    border: 1px solid #CECECE;
    border-radius: 5px;
    min-height: 100px;
    margin: 4px 0 16px;
    padding: 5px 12px;
  }

  .alerta{
    display: flex;
    background-color:#FF2a43;
    padding: 5px 12px;
    border-radius: 22px;
    margin-bottom: 16px;
    color: white;
  }
`;

export const Btn = styled.button`
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
`;