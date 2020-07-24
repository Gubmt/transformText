import React from 'react';

import Input from '../components/input';
import SideBarLeft from '../components/sideBarLeft';
import SideBarRight from '../components/sideBarRight';
import Header from '../components/header';
import Footer from '../components/footer';

import { Container } from './styles';
import {GlobalStyle} from '../components/layout/globalStyles.js'

const index = () => {
  return (
    <>
      <GlobalStyle/>
      <Container>
          <Header/>
          <SideBarLeft/>
          <Input/>
          <SideBarRight/>
          <Footer/>
      </Container>
    </>
  )
}

export default index;