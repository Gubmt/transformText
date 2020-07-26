import React from 'react';

import { Container, AuthorDescription, Author, SocialMedia, Wrapper } from './styles';

import facebook from '../../images/Facebook.svg';
import instagram from '../../images/instagram.svg';
import linkedin from '../../images/Linkedin.svg';

function Footer() {
  return (
    <Container>
      <Wrapper>
        <AuthorDescription>
          <Author>Transformador de Texto 2020</Author>
        </AuthorDescription>
        <SocialMedia>
          <a href="https://www.facebook.com/gustavo.barbieri.14"><img alt="Facebook" src={facebook} height="50" width="50"/></a>
          <a href="https://www.instagram.com/gustavobarbieri92/"><img alt="Instagram" src={instagram} height="50" width="50"/></a>
          <a href="https://www.linkedin.com/in/gustavobarbieri1/"><img alt="Linkedin" src={linkedin} height="50" width="50"/></a>
        </SocialMedia>
      </Wrapper>
    </Container>
  )
}

export default Footer;