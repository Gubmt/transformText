import React from 'react';

import Input from '../components/input';
import SideBarLeft from '../components/sideBarLeft';
import SideBarRight from '../components/sideBarRight';
import Header from '../components/header';
import Footer from '../components/footer';

import { Container, Wrapper } from './styles';

const index = () => {
  return (
    <Container>
      <Wrapper>
        <Header/>
        <SideBarLeft/>
        <Input/>
        <SideBarRight/>
        <Footer/>
      </Wrapper>
    </Container>
  )
}

export default index;