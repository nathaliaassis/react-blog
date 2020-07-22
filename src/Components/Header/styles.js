import styled from 'styled-components';

export const Background = styled.header`
    display: flex;
    margin: 0 auto;
    padding: 16px 32px;
    height: 72px;
    width: 100%;
    background-color: #151516;
`;

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto; 
    color: white;

    h2{
        font-weight: 500;
        text-transform: uppercase;
        letter-spacing: 4px;
    }

    a{
        font-size: 20px;
        font-weight: 300;
        color: white;
        text-decoration: none;
    }
    a.sair{
        font-size: 16px;
        margin-left: 24px;
    }
`;