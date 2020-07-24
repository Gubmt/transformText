import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: 10vh 80vh 10vh;
  grid-template-areas: "header header header"
                        "asideL main asideR"
                        "footer footer footer";
`;
