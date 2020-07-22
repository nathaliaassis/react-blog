import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.section`
    display: flex; 
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap; 
    padding: 24px 32px;

    article{
        display: flex;
        flex-direction: column;
        max-width: 700px;
        width: 100%;
        border: 1px solid #CECECE;
        border-radius: 5px;
        padding: 24px 0;
        margin-bottom: 32px;

        header.header{
            display: flex;
            flex-direction: column;
            padding: 0 24px;
            strong{
                font-size: 24px;
            }
            span{
                font-size: 14px;
                font-weight: 300;
                color: #9a9a9a;
            }
        }
        img.img-post{
            position: relative;
            display: flex;
            height: auto;
            width: 100%;
            margin: 24px 0;
        }
        footer{
            padding: 0 24px;
        }
    }
`;
export const Btn = styled(Link)`
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
  text-decoration: none;
  &:hover{
    background-color: #000;
  }
`;