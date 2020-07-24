import styled from 'styled-components';

export const Container = styled.div`
  /* display: flex;
  flex-direction: column;
  justify-content: center; 
  align-items: center;
  flex: 1; */
  grid-area: main;
  padding: 28px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #eee;
  height: 600px;
  /* width: 100%; */
`;

export const TextArea = styled.textarea`
    resize: vertical;
    height: 200px;
    min-height: 50px;
    max-height: 400px;
    width: 100%;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 16px;
    margin-bottom: 10px;
`;

export const ContainerButton = styled.div`
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    margin-top: 30px;
`;

export const Button = styled.button`
    background-color: #087cba;
    padding: 10px;
    color: #fff;
    border: 0;
    border-radius: 5px;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;

export const Title = styled.p`
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: bold;
    font-size: 26px;
    line-height: 0;
    margin-bottom: 30px;
`;

export const Description = styled.p`
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 16px;
    line-height: 0;
`;