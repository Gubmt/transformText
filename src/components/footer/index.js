import React from 'react';

import { Container, AuthorDescription, Author, SocialMedia, Wrapper } from './styles';

import facebook from '../../../public/icons/Facebook.svg';
import instagram from '../../../public/icons/instagram.svg';
import linkedin from '../../../public/icons/Linkedin.svg';


function Footer() {
  return (
    <Container>
      <Wrapper>
        <AuthorDescription>
          <Author>Gustavo Barbieri 2020</Author>
          <Author>gustavobarbieri@ymail.com</Author>
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