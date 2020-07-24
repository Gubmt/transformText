import styled from 'styled-components';

export const Container = styled.div`
    /* height: 100px; */
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #333;
    grid-area: footer;
`;  

export const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 500px;
`;

export const AuthorDescription = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;  

export const Author = styled.p`
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 16px;
    line-height: 0;
    color: #fff;
`;  

export const SocialMedia = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 200px;
`;  