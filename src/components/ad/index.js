import React from 'react';

import { Container } from './styles';

import dietaFlexivel from '../../images/DietaFlexivel.png';

function Ad() {
  return (
      <Container>
          <a href="https://www.facebook.com/emagrecimentodietaflexivel">
            <img src={dietaFlexivel} alt="DietaFlexivel" height="100vh" width="1000px"/>
          </a> 
      </Container>
  );
}

export default Ad;